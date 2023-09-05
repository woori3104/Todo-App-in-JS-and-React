<template>
  <div>
    <h1>Todo App</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="New Todo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class TodoApp extends Vue {
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
</script>