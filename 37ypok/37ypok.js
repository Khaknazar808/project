let count = 1;
while (count < 11) {
   console.log(count);
   count++;
}

count = 0;

while (count < 10) {
    count++;

  if (count === 5) {
      continue; 
  }

  if (count === 8) {
      break;
  }

    console.log(count);
}

console.log("Цикл завершен");

let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 5);


while (true) {
  let input = prompt("Введите число (для выхода введите 10)");
  if (input === "10") {
    console.log("Цикл завершён");
    break;
  }
}


for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 0; 
for (;;) {
  if (i > 100) {
    break;
  } else {
    i++;
  }
}


let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


let password = "";
while (password !== "1234") {
  password = prompt("Введите пароль");
}


for (let i = 0; i < 3; i++) {
  console.log("Hello");
}


for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}