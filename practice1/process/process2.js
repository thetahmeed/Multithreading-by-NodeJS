const {parentPort} = require('worker_threads');

let text = 'Process 2-----';

for (let index = 0; index < 50; index++) {
    console.log(text);
}

parentPort.postMessage(text);