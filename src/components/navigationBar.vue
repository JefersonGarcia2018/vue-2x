<template>
	<div id="nav">
		<router-link to="/">
		Home
		</router-link> |
		<router-link to="/sobre">
		Sobre
		</router-link> |
		<router-link to="/contato">
		Contato
		</router-link>
	</div>
</template>



<script>

export default {
	name: 'NavigationBar',

};

</script>

<style scope>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>