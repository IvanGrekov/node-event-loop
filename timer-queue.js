import fs from 'fs';

console.clear();

//#region NOTE: simple example
// console.log('--Start--');

// fs.readFile('README.md', (err, data) => {
//     if (!err) {
//         console.log('ReadFile');

//         return;
//     }
// });

// setTimeout(() => {
//     console.log('Timeout');
// }, 0);

// console.log('--End--');

// NOTE: callstack: [Start, End]
// NOTE: callback queue: [Timeout, ReadFile]
//#endregion

//#region NOTE: example with big timeout delay
// console.log('--Start--');

// fs.readFile('README.md', (err, data) => {
//     if (!err) {
//         console.log('ReadFile');

//         return;
//     }
// });

// setTimeout(() => {
//     console.log('Timeout');
// }, 5);

// console.log('--End--');

// NOTE: callstack: [Start, End]
// NOTE: callback queue: [ReadFile, Timeout]
//#endregion

//#region NOTE: Timeout and ReadFile in the callback queue at the same time
// console.log('--Start--');

// fs.readFile('README.md', (err, data) => {
//     if (!err) {
//         console.log('ReadFile');

//         return;
//     }
// });

// setTimeout(() => {
//     console.log('Timeout');
// }, 5);

// for (let index = 0; index < 10000000; index++) {
//     // NOTE: the loop takes more than 6ms
//     index;
// }

// console.log('--End--');

// NOTE: callstack: [Start, End]
// NOTE: callback queue: [Timeout, ReadFile] NOTE: Timeout is the first since has a high-priority in the NodeJS event loop
//#endregion
