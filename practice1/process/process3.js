const {parentPort} = require('worker_threads');

let text = 'Process 3----------';

for (let index = 0; index < 100; index++) {
    console.log(text);
}

parentPort.postMessage(text);