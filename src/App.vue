<template>
  <div id="app" class="container">

    <navigation-bar />

    <router-view/>

  </div>
</template>

<script>

import NavigationBar from './components/navigationBar.vue';


export default {
  name: 'App',

  components: { NavigationBar },

};

</script>



<style>

</style>
