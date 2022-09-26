const {Worker, isMainThread, parentPort, workerData,} = require('worker_threads');

if(isMainThread){
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker: ', message));
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('워커 핑ping');
} else{
    parentPort.on('message', (value) =>{
        console.log('from parent: ', value);
        parentPort.postMessage('페런트 퐁pong');
        parentPort.close();

    });
}