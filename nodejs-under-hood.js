// JS engine V8

// Call stack: [ main filter slice ]: slice -> filter -> main

// Event loop: with help of `libuv` library

// Task queue: [ f1 f2 f3 ]: f1 -> f2 -> f3


// -------------------------------------------------

// Five queues in NodeJS:

    // 1. Immediate callbacks: [ i1 i2 i3 ]
    // setImmediate(() => {})

    // 2. Timer queue (timers, intervals): [ t1 t2 t3 ]
    // setTimeout(() => {}, 0)
    // setInterval(() => {}, 10)

    // 3. Pending callbacks (error handlers / network handlers): [ p1 p2 p3 ]
    // server.on('connection', () => {})

    // 4. Input / Output operations (most of async callback: readFile, server response ...): [ io1 io2 io3 ]
    // fs.readFile('app.js', 'urf-8', () => {})

    // 5. Close callbacks (closing socket, close event of request): [ c1 c2 c3 ]
    // req.on('close', () => {})


    
// -------------------------------------------------

// 1. Pending callbacks: Immediate callbacks -> Timer queue -> Immediate callbacks -> Timer queue -> Pending callbacks


// 2. Input / Output operations: Immediate callbacks -> Timer queue -> Immediate callbacks -> Timer queue -> Input / Output operations


// 3. Close callbacks: Timer queue -> Immediate callbacks -> Timer queue -> Immediate callbacks -> Close callbacks
