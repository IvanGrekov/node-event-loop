console.log('Before');

setTimeout(() => {
    console.log('Timer');
}, 0);
Promise.resolve('resolved').then(console.log);

console.log('After');
