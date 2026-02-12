localStorage.setItem('greeting', 'Hello World'); 
const name = localStorage.getItem('greeting');
console.log(name);

localStorage.removeItem('greeting');
const removedName = localStorage.getItem('greeting');
console.log(removedName);

const user = {
    name: 'John',
    age: 30,
};

localStorage.setItem('user', JSON.stringify(user));
let storedUser = localStorage.getItem('user');
let parsedUser = JSON.parse(storedUser);
console.log(parsedUser.name); 
console.log(parsedUser.age);
storedUser = localStorage.getItem('user');
parsedUser = JSON.parse(storedUser);
parsedUser.country = 'USA';
localStorage.setItem('user', JSON.stringify(parsedUser));
console.log(parsedUser.country);

storedUser = localStorage.getItem('user');
parsedUser = JSON.parse(storedUser);
if (parsedUser === null) {
    const newUser = {
        name: 'Alice',
        age: 25,
        country: 'Canada'
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    console.log('New user created:', newUser.name);
} else {
    console.log(parsedUser.name);
}


localStorage.clear();   
storedUser = localStorage.getItem('user');
console.log(storedUser);

const tasks = [
   { id: 1, title: 'Learn JavaScript', completed: true },
   { id: 2, title: 'Build a project', completed: false },
   { id: 3, title: 'Practice coding', completed: true }
 ];
let tasksJSON = JSON.stringify(tasks);
localStorage.setItem('tasks', tasksJSON);
let storedTasksJSON = localStorage.getItem('tasks');
let parsedTasks = JSON.parse(storedTasksJSON);
console.log(parsedTasks[0].title);
console.log(parsedTasks[1].completed);

tasksJSON = localStorage.getItem('tasks');
parsedTasks = JSON.parse(tasksJSON);
parsedTasks[1].completed = true;
localStorage.setItem('tasks', JSON.stringify(parsedTasks));
const updatedTasksJSON = localStorage.getItem('tasks');
const updatedTasks = JSON.parse(updatedTasksJSON);
console.log(updatedTasks[1].completed);
