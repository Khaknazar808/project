// Задание 1: Простое условие
let number = Number(prompt("Введите число:"));

if (number > 10) {
  console.log("Число больше 10");
} else {
  console.log("Число меньше или равно 10");
}

// Задание 2
let isConfirmed = confirm("Вы действительно хотите удалить файл?");

if (isConfirmed) {
  console.log("Файл удален");
} else {
  console.log("Удаление отменено");
}

// Задание 3
let age = Number(prompt("Введите ваш возраст:"));

if (age < 18) {
  console.log("Вы еще подросток");
} else if (age >= 18 && age <= 30) {
  console.log("Вы молодой взрослый");
} else {
  console.log("Вы взрослый");
}

// Задание 4
let num = Number(prompt("Введите число для проверки на четность:"));

let result = (num % 2 === 0) ? "Четное число" : "Нечетное число";
console.log(result);

// Задание 5
let day = Number(prompt("Введите день недели (от 1 до 7):"));

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Некорректное значение");
}

// Задание 6
let a = Number(prompt("Введите первое число:"));
let b = Number(prompt("Введите второе число:"));

if (a === b) {
    console.log("Числа равны");
} else {
    let result = (a > b) ? "Первое число больше" : "Второе число больше";
    console.log(result);
}