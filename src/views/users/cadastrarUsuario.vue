<template>
	<div class="cadastarUsuario">

		<div class="container">
  <div class="py-5 text-center">
    <img class="d-block mx-auto mb-4" src="@/assets/logo.png" alt="" width="72" height="72">
    <h2>Cadastro</h2>
  </div>

  <div class="row justify-content-center">
    <div class="col-md-6 order-md-1">
      
      <form id="formCadastro" novalidate @submit.prevent="userRegister">
        
        <div class="row">
          <div class="col mb-3">
            <label for="name">Nome</label>
            <input type="text" v-model="name" class="form-control" id="name" placeholder="" value="" required>
            <div class="invalid-feedback">
              Este campo deve ser preenchido.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(meuemail@example.com)</span></label>
          <input type="email" v-model="email" class="form-control" id="email" placeholder="" required>
          <div class="invalid-feedback">
            Este campo deve ser preenchido.
          </div>
        </div>

        <div class="mb-3">
          <label for="password">Senha <span class="text-muted">(A senha deve ter, no mínimo, 8 caracteres)</span></label>
          <input type="password" v-model="password" class="form-control" id="password" minlength="8" placeholder="" required>
          <div class="invalid-feedback">
            Este campo deve ter no mínimo 8 caracteres.
          </div>
        </div>

        <div class="mb-3">
          <label for="password_validation">Confirmação de Senha</label>
          <input type="password" v-model="password_validation" class="form-control" id="password_validation" minlength="8" placeholder="" required>
          <div class="invalid-feedback">
            Este campo deve ter no mínimo 8 caracteres.
          </div>
          <div style="font-size: 80%;color: #dc3545;" v-if="errors.passwordError">
            {{errors.passwordError}}
          </div>
        </div>

        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>

  <p class="text-center">Já tem cadastro? <router-link to="/login">Faça Login</router-link></p>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2022 Jeferson</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>
		
	</div>
</template>


<script>

export default {
	name: 'ComponenteCadastarUsuario',

  data() {
    return {
      
        name: '',
        email: '',
        password: '',
        password_validation: '',

        errors: {
          passwordError: ''
        }
    }
  },

  methods: {

    userRegister() {

        //Capturando o Formulário
        var form = document.getElementById('formCadastro');

        //Se houver algum campo do Formulário não preenchido, ou preenchido incorretamente, ou seja: algum campo não-válido, então entra neste if.
        if (form.checkValidity() === false) 
        {
            //Adicionando ao <form> a class="was-validated" a qual acionará os elementos que possuem [class="invalid-feedback"] e deixará os campos de <input> em vermelho.
            form.classList.add('was-validated')

        } else {

            if (this.password != this.password_validation) 
            {
              this.errors.passwordError = '[ Confirmação de Senha ] e [ Senha ] não correspodem.';
              //document.getElementById('password_validation').classList.add('is-invalid');
            } else {

              //Se Cadastro OK
              window.sessionStorage.setItem('name', this.name);
              window.sessionStorage.setItem('email', this.email);
              window.sessionStorage.setItem('password', this.password);
              window.sessionStorage.setItem('token', true);
              this.$router.push( {path: '/'} );

            }

            
        }

    }

  },

};

</script>


<style scoped>

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

.container {
  max-width: 960px;
}

.lh-condensed { line-height: 1.25; }

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

<style>