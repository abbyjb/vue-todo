<template>
  <TodoList />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import TodoList from "@/components/todo/TodoList.vue";

export default {
  components: {
    TodoList,
  },
};
</script>
