<template>
 <div class="about">
  <h1>About This Application</h1>
  <p>
   This application is an example of how to use Vue.js to create interactive web applications.
   Here you can find information about the features and functionalities it offers.
  </p>
  <h2>Features</h2>
  <ul>
   <li>Real-time interactivity</li>
   <li>Page routing</li>
   <li>State management with Vuex</li>
   <li>Modularity of components</li>
  </ul>
  <h2>Contact</h2>
  <p>
   If you have any questions or comments, feel free to contact us through our support page.
  </p>
 </div>
</template>

<script>
export default {
 name: 'About',
};
</script>

<style scoped>
.about {
 padding: 20px;
 background-color: #f9f9f9;
 border-radius: 5px;
}

h1 {
 color: #333;
}

h2 {
 color: #555;
}

ul {
 list-style-type: none;
 padding: 0;
}

li {
 background: #e2e2e2;
 margin: 5px 0;
 padding: 10px;
 border-radius: 3px;
}
</style>
