import { SliderComponent } from 'react-native';
import TcpSocket from 'react-native-tcp-socket';

// Function to scan hosts
const scan = async function(hostIP, hostPort, timestamp, callback) {
    // console.log("Scanning " + hostIP + " port " + hostPort);
    return new Promise(function (resolve,reject) {
      const client = TcpSocket.createConnection({
        host: hostIP,
        port: hostPort
      }, 
      function() { //'connect' listener
        // console.log('Connected');
        client.destroy();
      });
      
      client.setTimeout(1000,function(){
          // console.log('Socket timed out');
          client.destroy();
      });
  
      client.on('connect', function() {
          const scan_result = {
            ip:hostIP, 
            port:hostPort
          };
          client.destroy();
          callback(hostIP, hostPort, timestamp, callback);
          resolve(scan_result);
      })
  
      client.on('timeout',function(){
        // console.log('Socket timed out for ' + hostIP + ' port ' + hostPort);
        const scan_result = {
          ip:hostIP, 
          port:hostPort
        };
        client.end('Timed out!');
        reject(scan_result);
      });
  
      client.on('end',function(data){
        // console.log('Socket ended from other end!');
        // console.log('End data : ' + data);
      });
  
      client.on('close',function(error){
        // console.log('Socket closed for ' + hostIP + ' port ' + hostPort);
        if(error){
          console.log('Socket was closed as a result of transmission error');
        }
      }); 
  
      client.on('error', function(err) {
        console.log('******* ERROR : ' + JSON.stringify(err));
        client.destroy();
      });
  
      setTimeout(function(){
        const isdestroyed = client.destroyed;
        // console.log('Socket destroyed:' + isdestroyed);
        client.destroy();
      },3000);
    });
}

export {scan};
