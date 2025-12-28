//zadanye 1
let age=15
console.log(age)
age=20
console.log(age) //может изменится за счет let

const ThisYear=2025
console.log(ThisYear) //не может быть изменен потому что стойт const

//zadanye 2
var name='Khaka'
console.log(name)
var name='Nuray'
console.log(name) //даже без var код может еще работать. из-за этого var считается устаревшим

//zadanye 3
let num = 141;
let str = 'Hello';
let bool = true;
let empty = null;
let notDefined;
let notANumber = NaN;

console.log(num, typeof num);
console.log(str, typeof str);
console.log(bool, typeof bool);
console.log(empty, typeof empty);
console.log(notDefined, typeof notDefined);
console.log(notANumber, typeof notANumber);

//zadanye 4
let strNum = '123';
let numFromStr = Number(strNum);
let strFromNum = String(456);

console.log(numFromStr, typeof numFromStr)
console.log(strFromNum, typeof strFromNum)

console.log(String(undefined))
console.log(String(null))

console.log(Number(undefined))
console.log(Number(null))

//zadanye 5
let value = 100;
console.log(value, typeof value);

value = 'сто';
console.log(value, typeof value); //автоматически меняется в зависимости от ее значения

//zadanye 6
let name_of_user = prompt('Введите имя')
let age_of_user = parseInt(prompt('Введите возраст'))
console.log('имя',name_of_user)
console.log('возраст',age_of_user)