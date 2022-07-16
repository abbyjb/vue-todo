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
        v-if="editMode"
        @keyup.enter="editMode = false"
        type="text"
        v-model="todo"
      />
      <span v-else>{{ todo }} </span>
      <div class="icon-container">
        <font-awesome-icon
          @click.prevent="editMode = !editMode"
          icon="fa-regular fa-pen-to-square"
        />
        <font-awesome-icon
          @click.prevent="deleteTodo"
          icon="fa-regular fa-trash-can"
        />
      </div>
    </label>
  </li>
</template>

<style scoped>
input[type="checkbox"]:checked ~ label {
  text-decoration: line-through;
  color: gray;
}

.icon-container {
  float: right;
  margin-right: 25%;
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
