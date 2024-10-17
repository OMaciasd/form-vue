<template>
  <div class="my-component">
    <h2>Custom Component</h2>
    <p v-if="message">{{ message }}</p>
    <input type="text" v-model="inputValue" placeholder="Type something..." />
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      message: '',
      inputValue: '',
    };
  },
  methods: {
    updateMessage() {
      this.message = this.inputValue;
      this.inputValue = '';
    },
  },
};
</script>

<style scoped>
.my-component {
  color: blue;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
