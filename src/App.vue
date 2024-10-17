<template>
  <div id="app">
    <header>
      <h1>Hello, Vue!</h1>
      <p>Welcome to your Vue application. Here you can add more components.</p>
    </header>
    <main>
      <MyComponent />
      <AnotherComponent />
    </main>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue';

export default {
  name: 'App',
  components: {
    MyComponent,
    AnotherComponent,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #35495e;
  color: white;
  padding: 20px;
}

main {
  padding: 20px;
}
</style>
