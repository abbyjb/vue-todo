<template>
  <form class="text-center" @submit.prevent="handleSubmit">
    <input
      class="rounded border-2 border-solid border-black px-1"
      type="text"
      v-model="newTodo"
      placeholder="Add todo"
    />
  </form>
</template>

<script>
export default {
  name: "AddTodoItem",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add-todo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>
