<template>
  <form @submit.prevent="handleSubmit">
    <label>
      Add Todo Item
      <input type="text" v-model="newTodo" />
    </label>
  </form>
</template>

<styled scoped>
  form {
    text-align: center;
  }
</styled>

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
