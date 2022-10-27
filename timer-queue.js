import fs from 'fs';

console.clear();

console.log('---- START ----');

fs.readFile('./index.html', 'utf-8', () => {
    console.log('File');
});

setTimeout(() => {
    console.log('Timeout');
}, 0);

setTimeout(() => {
    console.log('Timeout 2 seconds');
}, 2);

console.time('Loop');
let count = 0;
for (let index = 0; index < 10000000; index++) {
    count = index;
}
console.timeEnd('Loop');

console.log('---- FINISH ----');
