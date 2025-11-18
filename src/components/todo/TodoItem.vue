<template>
  <li>{{ description }}</li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    description: String,
  },
};
</script>
