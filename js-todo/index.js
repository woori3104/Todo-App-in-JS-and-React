// Reference HTML elements
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Add event handler to the button
addButton.addEventListener("click", () => {
  const task = todoInput.value; // Acquire value from input field
  if (task) {
    const listItem = document.createElement("li"); // Create a new list item
    listItem.textContent = task; // Set the text of the item
    listItem.addEventListener("click", () => {
      // Add click event to the item
      todoList.removeChild(listItem); // Remove the item when clicked
    });
    todoList.appendChild(listItem); // Add the item to the list
    todoInput.value = ""; // Clear the input field
  }
});
