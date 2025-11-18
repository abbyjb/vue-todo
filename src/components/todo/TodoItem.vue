<template>
  <li key="todoKey">
    <input
      @change="toggleCheckbox"
      :checked="checked"
      type="checkbox"
      id="checkbox"
    />
    <label for="checkbox">
      <input
        type="text"
        @keyup.enter="editMode = false"
        v-if="editMode"
        v-model="todo"
      />
      <button v-if="editMode" @click.prevent="deleteTodo">Delete</button>
      <span v-else @click.prevent="editMode = true">
        {{ todo }}
      </span>
    </label>
  </li>
</template>

<style scoped>
input[type="checkbox"]:checked ~ label {
  text-decoration: line-through;
  color: gray;
}
</style>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      checked: false,
      editMode: false,
      todo: this.description,
    };
  },
  props: {
    description: String,
    todoKey: Number,
  },
  methods: {
    toggleCheckbox(event) {
      this.checked = event.target.checked;
    },

    deleteTodo() {
      this.$emit("delete-todo", this.todoKey);
    },
  },
};
</script>
