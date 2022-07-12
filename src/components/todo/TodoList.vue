<template>
  <div>
    <h1>Todo List</h1>
    <ul>
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

<style scoped>
div {
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  align-items: center;
  width: 25%;
  padding: 0px 10px 10px;
}

ul {
  text-align: left;
  list-style-type: none;
}

li {
  margin-bottom: 5px;
}

.add-todo-item {
  text-align: left;
}
</style>

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
