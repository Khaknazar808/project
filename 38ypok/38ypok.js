document.getElementById("message").textContent = "Добро пожаловать в JavaScript!";

const boxesByClass = document.getElementsByClassName("box");
for (let box of boxesByClass) {
    box.style.backgroundColor = "green";
    }

document.querySelector("#text").textContent = "Текст изменён с помощью querySelector";

const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(box => {
    box.style.borderRadius = "10px";
    });

const highlights = document.querySelectorAll(".highlight");
highlights.forEach(p => {
    p.style.color = "red";
    });