import React, { useEffect, useReducer, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import { NetworkInfo } from "react-native-network-info";
import { useHistory } from "react-router-dom";
import useDeepCompareEffect from 'use-deep-compare-effect';

import { scan } from './LANScanner.js';

// Constants
// const COMMON_PORTS = [20,21,22,23,25,53,80,110,111,135,139,143,443,445,993,995,1723,3306,3389,5900,8080];
const COMMON_PORTS = [22,80,443];

// Reducer (state management function)
const reducer = (state, action) => {
    switch (action.type) {
        case 'set_ip':
            // console.log("Setting user IP address to ", action.payload.ipAddress);
            // Set subnet address
            let subnetAddr = action.payload.ipAddress.match(/\b(?:\d{1,3}.){2}\d{1,3}.\b/g) // Need to use Regex with this pattern to find the first three octets: \b(?:\d{1,3}.){2}\d{1,3}.\b
            console.log("Subnet address is " + subnetAddr);
            return {...state, userIPAddress: action.payload.ipAddress, subnetAddress: subnetAddr[0], ipInfoObtained: true};
        case 'set_subnet':
            // console.log("Setting user subnet to", action.payload.subnet);
            return {...state, userSubnet: action.payload.subnet, subnetInfoObtained: true};
        case 'set_subnet_address':
            console.log("Setting subnetAddress to: " + action.payload[0]);
            return {...state, subnetAddress: action.payload[0]};
        case 'set_gateway':
            // console.log("Setting user gateway to", action.payload.userGateway);
            return {...state, userGateway: action.payload.defaultGateway, gatewayInfoObtained: true};
        case 'set_scan_started':
            return {...state, scanStarted: true};
        case 'set_scan_results':
            console.log("Received a result! " + action.payload.ip + ' ' + action.payload.port);
            return {
                ...state,
                scanResults: [
                    ...state.scanResults,
                    { ...action.payload },
                ],
            };
        case 'set_scan_ended':
            return {...state, scanEnded: true};
        default:
            return state;
    }
}

// Definition for the UI for the screen.
const ScanScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        userIPAddress: '',
        userSubnet: '',
        subnetAddress: '',
        userGateway: '',
        scanResults:[],
        ipInfoObtained:false,
        subnetInfoObtained:false,
        gatewayInfoObtained:false,
        scanStarted: false,
        scanEnded: false
    });

    const [previousScanResults, setPreviousScanResults] = useState([]);
    const { push } = useHistory();
    // const { userIPAddress } = state;

    const storeIpIntoState = (ip, port, timestamp) => {
        dispatch({type: 'set_scan_results', payload: { ip, port, timestamp } });
    };

    //Scan promise handler.
    const startScan = (ip) => {
        const timestamp = (new Date()).toISOString();

        COMMON_PORTS.forEach((port) => {
            scan(ip, port, timestamp, storeIpIntoState);
        });

        // COMMON_PORTS.forEach(element => {
        //     scan(ip, element).then(async (message) => {
        //         // console.log("Success for port " + message.port);
        //         dispatch({type: 'set_scan_results', payload: { ip: message.ip, port: message.port } });
        //         console.log('AsyncStorage', AsyncStorage);
                
        //         const currentResultsAsString = await AsyncStorage.getItem('scan_results');
        //         const currentResultsAsArray = currentResultsAsString ? JSON.parse(currentResultsAsString) : [];

        //         const newResults = [
        //             ...currentResultsAsArray,
        //             {
        //                 key: `${message.ip}${message.port}`,
        //                 ip: message.ip,
        //                 port: message.port,
        //             },
        //         ];

        //         await AsyncStorage.setItem('scan_results', JSON.stringify(newResults));
        //     }).catch((message) => {
        //         // console.log("Host " + message.ip + " port " + message.port + " timed out!");
        //         if (message.ip === state.subnetAddress + "254" && message.port === COMMON_PORTS[COMMON_PORTS.length-1]) {
        //             console.log("Last IP and port detected. Setting scanEnded flag.");
        //             dispatch({type: 'set_scan_ended', payload: true});
        //         }
        //     })
        // })
    }

    const initialize = async () => {
        // Get device IP address
        // AsyncStorage.setItem('scan_results', '');

        const resultsAsString = await AsyncStorage.getItem('scan_results');
        const resultsAsArray = resultsAsString ? JSON.parse(resultsAsString) : [];

        setPreviousScanResults(resultsAsArray);

        NetworkInfo.getIPAddress().then(ipAddress => {
            dispatch({type:'set_ip', payload: { ipAddress }});
        });
    
        NetworkInfo.getSubnet().then(subnet => {
            dispatch({type:'set_subnet', payload: { subnet }});
        });
    
        NetworkInfo.getGatewayIPAddress().then(defaultGateway => {
            dispatch({type:'set_gateway', payload: { defaultGateway }});
        });
    };
    
    useEffect(() => {
        initialize();
    }, []);

    const updateStorage = async () => {
        console.log('SCAN RESULTS TOTAL', state.scanResults.length);
        if (state.scanResults.length === 0) return;
        
        const newResults = [
            ...previousScanResults,
            ...state.scanResults,
        ];
        console.log(state.scanResults);

        await AsyncStorage.setItem('scan_results', JSON.stringify(newResults));
    };

    useDeepCompareEffect(() => {
        console.log('INSIDE');
        updateStorage();
    }, [state.scanResults]);

    useEffect(() => {
        if (state.ipInfoObtained && state.subnetInfoObtained && state.gatewayInfoObtained) {
            // console.log("Info obtained! Ready to scan.")
            if (!state.scanStarted) {
                dispatch({type:'set_scan_started', payload:true });
                
                if (state.userSubnet === '255.255.255.0') {
                    console.log("/24 detected. Scanning.");
    
                    let subnetAddr = state.userIPAddress.match(/\b(?:\d{1,3}.){2}\d{1,3}.\b/g) // Need to use Regex with this pattern to find the first three octets: \b(?:\d{1,3}.){2}\d{1,3}.\b
    
                    for (i=1; i < 255; i++) {
                        // console.log(subnetAddr[0] + i);
                        startScan(subnetAddr + i);
                    }
                }
    
            }
    
        }
    }, [state.ipInfoObtained, state.subnetInfoObtained, state.gatewayInfoObtained]);


    // console.log("State: " + JSON.stringify(state));

    return (
        <View style={styles.parentViewStyle}>
            <Text style={styles.textStyle}>{state.scanEnded === false ? 'Scanning local network...' : 'Done!' }</Text>
            <Text style={styles.textStyle}>Found { Object.keys(state.scanResults).length } open ports{state.scanEnded === false ? ' so far' : null }.</Text>
            {/* <Text style={styles.textStyle}>Your local IP address is: { state.userIPAddress }</Text> */}
            {/* <Text style={styles.textStyle}>Your subnet mask is: { state.userSubnet }</Text> */}
            {/* <Text style={styles.textStyle}>Your default gateway (router IP address) is: { state.userGateway }</Text> */}
            {/* <Text style={styles.textStyle}>Results:{JSON.stringify(state.scanResults)}</Text> */}
            {/* {state.scanEnded === true ? <Button title='See Results!'></Button>: null} */}
            {false ? <Button title='See Results!'></Button>: null}

            <Button
                title='Results'
                onPress={(ev) => {
                    ev.preventDefault();
                    push('/results');
                }}
            />

            <FlatList
                keyExtractor = { host => host.key}
                data = {state.scanResults}
                renderItem={({ item }) => {
                        return <Text style={styles.resultsStyle}>{item.ip} - {item.port}</Text>
                    }
                }   
            />
        </View>
    );
};

const styles = StyleSheet.create({
    parentViewStyle: {
        marginTop: 100,
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10
    },
    imageStyle: {
        width: 150,
        height: 150,
        margin: 20,
    },
    resultsStyle: {
        fontSize: 20
    }
});

export default ScanScreen;
