import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { useHistory } from "react-router-dom";
import groupBy from 'lodash/groupBy'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultsScreen = (props) => {
    const [results, setResults] = useState([]);
    const { push } = useHistory();

    const fetchResults = async () => {
        const resultsAsString = await AsyncStorage.getItem('scan_results');
        const resultsAsArray = resultsAsString ? JSON.parse(resultsAsString) : [];

        const groupedResults = groupBy(resultsAsArray, 'timestamp');

        setResults(groupedResults);
    };

    useEffect(() => {
        fetchResults();

        const interval = setInterval(() => {
            fetchResults();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.parentViewStyle}>
            <Text style={styles.headerStyle}>Scan Results</Text>

            <Button
                title='Items'
                onPress={(ev) => {
                    ev.preventDefault();
                    push('/');
                }}
            />

            <View style={styles.listViewStyle}>
                <FlatList
                    keyExtractor = { scan => scan.key }
                    style={styles.list}
                    data = {Object.keys(results)}
                    renderItem = {( {item} ) => {

                            return (
                                <View key={item}>
                                    <Text style={styles.itemHeader}>{item}</Text>

                                    {
                                        results[item].map(({ ip, port }, index) => (
                                            <Text key={`${ip}_${index+1}`} style={styles.itemResult}>
                                                {`${ip} | ${port}`}
                                            </Text>
                                        ))
                                    }
                                </View>
                            );
                        }
                    }
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    parentViewStyle: {
        marginTop: 100
    },
    textStyle: {
        textAlign: 'center'
    },
    headerStyle: {
        fontSize: 42,
        textAlign: 'center',
        marginBottom: 50
    },
    cellStyle: {
        fontSize: 28,
        // borderWidth: 1,
        // borderColor: 'red',
        textAlign: 'center',
        height: 50
    },
    listViewStyle: {
        // borderColor: 'blue',
        // borderWidth: 1,
        flexDirection: 'column'
    },
    list: {
        maxHeight: 400,
        paddingLeft: 20,
        paddingRight: 20,
    },
    itemHeader: {
        fontSize: 28,
        marginBottom: 10,
        marginTop: 10,
        color: '#0BA704',
    },
    itemResult: {
        fontSize: 14,
    },
});

export default ResultsScreen;
