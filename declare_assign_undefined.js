console.log(score);

score = 80;
var score;

console.log(score);

console.log(1 === 1.0); // true

var v;
console.log(typeof v);  // undefined

v = 3;  // number
console.log(typeof v); // number

v = 'Hello';  // string
console.log(typeof v); // string

v = true;  // boolean
console.log(typeof v);  // boolean

v = null;  // null
console.log(typeof v);  // object

v = Symbol();  // 심벌
console.log(typeof v); // symbol

v = {};  // 객체
console.log(typeof v);  // object

v = [];  // 배열
console.log(typeof v); // object

v = function(){};  // 함수
console.log(typeof v);

// var ____; // 1
// var $elem; // 2
// var 1st; // 3
// var this; // 4
// var num; // 5
// var hello, HELLO; // 6
// var first-name; // 7