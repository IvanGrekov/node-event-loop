console.clear();

console.log('---- Start ----');

// print(1);
// print(2);
// print(3);

// [1, 2, 3].forEach(print);

setTimeout(print, 0, 1);
print(2);
print(3);

console.log('---- End ----');

function print(x) {
    console.log(x);
}
