<template>
  <section class="todoapp">

    <header class="header">
      <h1>Vue3 todoList</h1>
      <input 
        type="text" 
        class="new-todo" 
        placeholder="想干的事" 
        @keyup.enter="addTodo"
        v-model="newTodo"
      >
    </header>

    <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="todo in todos" :key="todo.id">
          <div class="view">
            <label>{{todo.title}}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      newTodo: '',
      todos: [
        { id: '1', title: '吃饭', completed: false },
        { id: '2', title: '睡觉', completed: false }
      ]
    })

    function addTodo() {
      const value = state.newTodo && state.newTodo.trim()
      state.todos.push({
        id: state.todos.length + 1,
        title: value,
        completed: false
      })
      state.newTodo = ''
    }

    function removeTodo(todo) {
      console.log(todo);
      state.todos = state.todos.filter(item => todo != item)
    }

    return {
      ...toRefs(state),
      addTodo,
      removeTodo
    }
  }
}
</script>

<style>

</style>
