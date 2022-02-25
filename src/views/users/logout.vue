<template>
	<div class="row logout">
		<div class="col text-center">
			<button type="button" class="btn btn-danger" @click="logout">Sair</button>
		</div>	
	</div>
</template>

<script>
	export default {
		name: 'LogoutComponente',

		methods: {

			logout(){

				window.sessionStorage.removeItem('token');
                this.$router.push({ path: '/login' });
			}
		}
	};
</script>