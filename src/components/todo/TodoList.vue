<template>
  <div class="list-container">
    <h1>Todo List</h1>
    <ul>
      <TodoItem
        v-for="item in todoItems"
        :key="item.id"
        :description="item.description"
      />
    </ul>
  </div>
</template>

<style scoped>
div {
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  align-items: center;
  width: 25%;
}

li {
  text-align: left;
  list-style-type: none;
  margin-bottom: 5px;
}
</style>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  data() {
    return {
      todoItems: [
        { id: 1, description: "Brush Teeth" },
        { id: 2, description: "Make Bed" },
        { id: 3, description: "Make Breakfast" },
      ],
    };
  },
  components: { TodoItem },
};
</script>
