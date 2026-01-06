// Задание 1
let a = 10;
let b = 5;
let c = 2;

console.log("Сумма a + b + c =", a + b + c);
console.log("a + c - b =", (a + c) - b);
console.log("a * b / c =", (a * b) / c);
console.log("Остаток от деления a на b =", a % b);

// Задание 2
let x = 7;
console.log("x++ + ++x =", x++ + ++x);

x = 7; 
console.log("x-- - --x =", x-- - --x);

// Задание 3
let result = 4 + 5;
console.log("The result is: " + result);

// Задание 4
console.log("a > b и оба > 0 =", a > b && a > 0 && b > 0);
console.log("c < 10 или c === 2 =", c < 10 || c === 2);
console.log("a / c не равно 5 =", a / c !== 5);

// Задание 5
console.log("10 == '10' :", 10 == "10");  //"10" превращается в число и они будут равны
console.log("10 === '10' :", 10 === "10");  //"10" остается строкой

//Задание 6
 x = 12

let resultX= (x % 2 === 0 || x % 3 ===0) && x % 5 !==0;
console.log ("x подходит под условие", resultX);

let y = 12

let resultY = !(y > 10 || y < 5);
console.log("y в диапазоне 5-10", resultY);
