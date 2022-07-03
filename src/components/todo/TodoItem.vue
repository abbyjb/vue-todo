<template>
  <li>
    <input
      @change="toggleCheckbox"
      :checked="checked"
      type="checkbox"
      id="checkbox"
    />
    <label for="checkbox">
      {{ description }}
    </label>
  </li>
</template>

<style scoped>
input[type="checkbox"]:checked ~ label {
  text-decoration: line-through;
}
</style>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      checked: false,
    };
  },
  props: {
    description: String,
  },
  methods: {
    toggleCheckbox(event) {
      this.checked = event.target.checked;
    },
  },
};
</script>
