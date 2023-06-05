const { Worker } = require("worker_threads");

const process1 = new Worker("./process/process1.js");
const process2 = new Worker("./process/process2.js");
const process3 = new Worker("./process/process3.js");

process1.on("message", (data) => {});
process2.on("message", (data) => {});
process3.on("message", (data) => {});
