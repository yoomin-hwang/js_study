const arr = [
    'string',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function () {}
];

const sparse = [, 2, , 4];

console.log(sparse.length); // ㄱ.
console.log(sparse[2]);     // ㄴ.

let test = new Array(10);
test.length = 20;
console.log(test.length);
console.log(Object.getOwnPropertyDescriptor(test));

const hello = Array.from({ length: 3 }, (_, i) => i)
console.log(hello[2]);