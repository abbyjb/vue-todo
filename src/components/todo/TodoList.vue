<template>
  <div class="list-container">
    <h1>Todo List</h1>
    <ul>
      <li>Brush Teeth</li>
      <li>Make Coffee</li>
      <li>Get Groceries</li>
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
export default {
  name: "TodoList",
};
</script>
