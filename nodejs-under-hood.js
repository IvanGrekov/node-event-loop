// NOTE: JS engine V8

// NOTE: Call stack: [ main filter slice ]: slice -> filter -> main

// NOTE: Event loop: with help of `libuv` library

// NOTE: Task queue: [ f1 f2 f3 ]: f1 -> f2 -> f3

// ------------------------------------------------

// NOTE: Queues of Microtasks in NodeJS (Task queue takes one by one, not all tasks at once):

// 1. Next tick queue: [ nt1 ]
process.nextTick(() => {});

// 2. Promises and queueMicrotasks: [ pr1 ]
promise.then(() => {});
promise.catch(() => {});
queueMicrotasks(() => {});

// ------------------------------------------------

// Until we have not empty `Next tick queue`, we can't start taking callbacks from `Promises and queueMicrotasks`

// Until we have not empty `Promises and queueMicrotasks`, we can't start taking callbacks from `Next tick queue`

// ------------------------------------------------

// NOTE: Five queues of Macrotasks in NodeJS (Task queue takes all at once):

// 1. Immediate callbacks: [ im1 im2 im3 ]
setImmediate(() => {});

// 2. Timer queue (timers, intervals): [ t1 t2 t3 ]
setTimeout(() => {}, 0);
setInterval(() => {}, 10);

// 3. Pending callbacks (error handlers / network handlers): [ pe1 pe2 pe3 ]
server.on('connection', () => {});

// 4. Input / Output operations (most of async callback: readFile, server response ...): [ io1 io2 io3 ]
fs.readFile('app.js', 'urf-8', (data) => {});

// 5. Close callbacks (closing socket, close event of request): [ cl1 cl2 cl3 ]
req.on('close', () => {});

// ------------------------------------------------

// 1. Pending callbacks: Immediate callbacks -> Timer queue -> Immediate callbacks -> Timer queue -> Pending callbacks

// 2. Input / Output operations: Immediate callbacks -> Timer queue -> Immediate callbacks -> Timer queue -> Input / Output operations

// 3. Close callbacks: Timer queue -> Immediate callbacks -> Timer queue -> Immediate callbacks -> Close callbacks

// NOTE: there are some limitations, how many tasks the event loop can takes to callbacks queue
