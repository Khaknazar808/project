let person = {
   name: "Alex",
   age: 18,
   city: "New York"
};
console.log(person);

console.log(person.name);
console.log(person.age);

person.city = "Los Angeles";
console.log(person.city);

person.greet = function () {
  console.log(`'Привет, меня зовут ${this.name}, мне ${this.age} лет!'`);
};

person.greet();


const obj1 = { a: 10, b: 20 };
const obj2 = { a: 10, b: 20 };

console.log(obj1 == obj2);   
console.log(obj1 === obj2);  


const book = {
  title: "JavaScript Basics",
  author: "John Doe",
  details: {
    year: 2022,
    pages: 350
  }
};

const bookCopy = Object.assign({}, book);

bookCopy.details.year = 2023;

console.log(book.details.year);     
console.log(bookCopy.details.year); 


const calculatour = {
    a: 5,
    b: 10,
    sum: function() {
        return this.a + this.b;
    },

    multiply ()  {
    return this.a * this.b;
}
};

console.log(calculatour.sum());       
console.log(calculatour.multiply());


const car = {
    brand: "Toyota",
    model: "Camry",
};
car.model = "Corolla";
console.log(car.model);
