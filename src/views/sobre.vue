<template>
	<div class="sobre">

		<logout-component />

		<h1 class="text-center h1">Bem-vindo {{nomeUsuário}}</h1>
		<h2 class="text-center mt-5">Página Sobre</h2>
	</div>
</template>


<script>

export default {
	name: 'PaginaSobre',

	computed: {

			nomeUsuário() {
				return window.sessionStorage.getItem('name');
			}
		},
};

</script>