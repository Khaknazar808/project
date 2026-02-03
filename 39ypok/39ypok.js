const jsButton = document.getElementById('jsButton');
jsButton.addEventListener('click', () => {
    console.log('Событие обработано через JS');
});

const myDiv = document.getElementById('myDiv');

myDiv.addEventListener('click', () => {
    myDiv.style.backgroundColor = 'blue';
});

myDiv.addEventListener('mouseover', () => {
    console.log('Элемент нажат');
});

const textInput = document.getElementById('textInput');
textInput.addEventListener('keydown', (event) => {
    console.log(event.target.value);
});

const myLink = document.getElementById('myLink');
myLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Переход по ссылке отменен');
});

const list = document.getElementById('list');
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
    console.log(event.target.textContent);
    }
});

const keyboardInput = document.getElementById('keyboardInput');
keyboardInput.addEventListener('keydown', (event) => {
    console.log(event.code);
});
