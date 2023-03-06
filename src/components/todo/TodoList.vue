<template>
  <div
    class="inline-block rounded border-2 border-black border-solid px-10 pb-10"
  >
    <h1 class="text-center my-3 text-2xl">Todo List</h1>
    <ul class="text-left list-none">
      <TodoItem
        v-for="item in todoItems"
        :key="item.id"
        :description="item.description"
        :todoKey="item.id"
        @delete-todo="deleteTodo"
      />
    </ul>
    <AddTodoItem class="add-todo-item" @add-todo="addTodo" />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodoItem from "./AddTodoItem.vue";

export default {
  name: "TodoList",
  data() {
    return {
      lastCreatedId: 3,
      todoItems: [
        { id: 1, description: "Brush Teeth" },
        { id: 2, description: "Make Bed" },
        { id: 3, description: "Make Breakfast" },
      ],
    };
  },
  components: { TodoItem, AddTodoItem },
  methods: {
    addTodo(description) {
      this.todoItems.push({
        id: this.lastCreatedId++,
        description,
      });
    },

    deleteTodo(todoId) {
      const filteredTodos = this.todoItems.filter((todo) => {
        return todo.id !== todoId;
      });

      this.todoItems = filteredTodos;
    },
  },
};
</script>
