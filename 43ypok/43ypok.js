fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log("Задание 1:");
    console.log("Заголовок:", data.title);
    console.log("Текст:", data.body);
  });


fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Новый пост",
    body: "Содержимое поста",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("Задание 2:");
    console.log("Ответ сервера:", data);
  });


fetch("https://jsonplaceholder.typicode.com/nonexistent")
  .then(response => {
    if (!response.ok) {
      throw new Error("Ошибка HTTP: " + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error("Задание 3: Произошла ошибка:", error.message);
  });


fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Обновленный заголовок",
    body: "Обновленный текст",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("Задание 4 (PUT):", data);
  });


fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(response => {
    console.log("Пост удален", response.status);
  });


async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error("Ошибка HTTP: " + response.status);
    }

    const data = await response.json();
    console.log("Задание 5:", data);
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
}

getPost();


fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "GET",
  headers: {
    "User-Agent": "MyApp",
    "Authorization": "Bearer exampletoken"
  }
})
  .then(response => response.json())
  .then(data => {
    console.log("Задание 6:", data);
  });