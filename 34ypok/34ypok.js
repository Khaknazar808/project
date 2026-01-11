 function greet() {
  console.log("Hello World!");
}

greet();

function sayHello(name) {
  console.log('Hello, {name}'.replace('{name}', name));
}

sayHello("Tinker");
sayHello("Carl");
sayHello("Khaknazar");


function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5));
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(10));

function max(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Числа равны";
  }
}

console.log(max(5, 8));
console.log(max(10, 3));
console.log(max(4, 4));
 function getInitials(firstName, lastName) {
  return `${firstName[0]}${lastName[0]}`;
}

console.log(getInitials("Алиса", "Боброва"));
console.log(getInitials("Иван", "Петров"));
function square(number) {
  return number * number;
}

function cube(number) {
  return square(number) * number;
}

console.log(cube(3));
const sumArrow = (a, b) => a + b;

console.log(sumArrow(6, 4));
function getFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(getFactorial(5));