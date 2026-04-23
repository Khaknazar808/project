const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    data.forEach(post => {
      console.log(post.title);
    });
  }
};

xhr.send();


const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    data.forEach(post => {
      console.log(post.title);
    });
  }
};

xhr.send();


const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    const ul = document.createElement("ul");

    data.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  }
};

xhr.send();


const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    const ul = document.createElement("ul");

    data.forEach(post => {
      const li = document.createElement("li");

      li.innerHTML = `
        <strong>${post.title}</strong><br>
        ${post.body}<br>
        <em>User ID: ${post.userId}</em>
      `;

      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  }
};

xhr.send();


const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    showError("Ошибка загрузки: " + xhr.status);
  }
};

xhr.onerror = function () {
  showError("Сервер не отвечает или произошла ошибка сети");
};

function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.style.color = "red";
  errorDiv.textContent = message;
  document.body.appendChild(errorDiv);
}

xhr.send();


const xhr = new XMLHttpRequest();

const loader = document.createElement("p");
loader.textContent = "Загрузка данных...";
document.body.appendChild(loader);

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  loader.remove();

  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    const ul = document.createElement("ul");

    data.forEach(post => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${post.title}</strong><br>
        ${post.body}<br>
        <em>User ID: ${post.userId}</em>
      `;
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  } else {
    showError("Ошибка загрузки: " + xhr.status);
  }
};

xhr.onerror = function () {
  loader.remove();
  showError("Ошибка сети");
};

function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.style.color = "red";
  errorDiv.textContent = message;
  document.body.appendChild(errorDiv);
}

xhr.send();