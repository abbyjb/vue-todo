<template>
  <div class="container mx-auto mt-10 text-center">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/todo/TodoList.vue";

export default {
  components: {
    TodoList,
  },
};
</script>
