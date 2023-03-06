<template>
  <li class="mb-5 align-text-middle" key="todoKey">
    <input
      class="peer"
      @change="toggleCheckbox"
      :checked="checked"
      type="checkbox"
      id="checkbox"
    />
    <label
      class="px-2 peer-checked:line-through peer-checked:text-gray-500"
      for="checkbox"
    >
      <input
        v-if="editMode"
        class="rounded border-2 border-solid border-black"
        @keyup.enter="editMode = false"
        type="text"
        width="20"
        v-model="todo"
      />
      <span v-else> {{ todo }} </span>
      <div class="float-right">
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
