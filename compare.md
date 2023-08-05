# JavaScript Vs React Todo App
This repository contains two implementations of a simple Todo application, one built using plain JavaScript and another using the React framework. Both applications allow users to add tasks to a list and delete them when they're done.

## Plain JavaScript Version
The JavaScript version is a simple implementation of the application. It directly manipulates the DOM to render and update the Todo list. The todo-input, add-button, and todo-list elements are selected from the DOM, and event listeners are added to handle user interactions.

When a user types in the input field and clicks the "Add Todo" button (or hits 'Enter'), a new list item is created and appended to the todo list.
Clicking on a task in the list deletes it.
See index.js for the source code.

## React Version
The React version, on the other hand, uses a more modern approach and is based on the component architecture. It uses state variables to track the list of todos and the current value of the input field, and it re-renders the component whenever the state changes.

The handleInput and handleKeyPress functions update the input state and listen for the 'Enter' keypress, respectively.
The addTodo function updates the todos state with a new todo.
Each todo is rendered as a list item in the returned JSX, and it's given an onClick handler to delete it when clicked.
See Todo.js for the source code.

## Comparison
While both applications achieve the same functionality, they demonstrate the difference in managing UI state and DOM manipulation between vanilla JavaScript and React.

The JavaScript version requires manual DOM manipulation, which can get complex and hard to manage as the application grows.
The React version provides a declarative approach to UI development and abstracts away direct DOM manipulation. This makes the state of the UI easier to reason about and leads to more maintainable code in larger applications.
Remember, the right tool often depends on the specific needs and constraints of your project.

Feel free to clone this repository, explore the code, and run the applications on your local environment.

## Running the applications
Follow these steps to run the applications:

Clone this repository: git clone https://github.com/woori3104/todo-javascript-vs-react.git
Navigate into the project directory: cd todo-javascript-vs-react
To run the JavaScript version, open index.html in your web browser.
To run the React version, you'll need to have Node.js and npm installed on 

your machine:
Install project dependencies: npm install
Start the React application: npm start
The React app will be available at http://localhost:3000.
We hope this repository helps you understand the differences and similarities between vanilla JavaScript and React in terms of building simple applications like a Todo App.