<template>
	<div class="home">

		<logout-component />

		<h1 class="text-center h1">Bem-vindo {{nomeUsuário}}</h1>
		<h2 class="text-center mt-5">Página Home</h2>
	</div>
</template>

<script>
	export default {
		name: 'PaginaHome',

		computed: {

			nomeUsuário() {
				return window.sessionStorage.getItem('name');
			}
		},

	};
</script>