<template>
  <div id="login" class="text-center">

    <form id="formLogin" class="form-signin" novalidate  @submit.prevent="userLogin">
      
      <img class="mb-4" src="@/assets/logo.png" alt="logo.png" width="72" height="72">
      <div class="row" v-if="errors.login">
          <div class="col alert alert-danger" role="alert">
            {{errors.login}}
          </div>
      </div>
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      
      <label for="inputEmail" class="sr-only">Email</label>
      <input 
      type="email" 
      id="inputEmail" 
      class="form-control" 
      placeholder="Email" 
      v-model="email"
      autofocus
      required
      >

      <label for="inputPassword" class="sr-only">Senha</label>
      <input 
      type="password" 
      id="inputPassword" 
      class="form-control" 
      placeholder="Senha"
      v-model="password"
      required
      >

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Lembre-me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>

      <p>Não é registrado? <router-link to="/cadastar-usuario">Registrar-se</router-link></p>
    </form>

    <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2022 Jeferson</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
      </ul>
    </footer>

  
  </div>
</template>

<script>

export default {
  name: 'Componente-Login',

  data() {
    return {
      
        email: '',
        password: '',

        errors: {
            login: ''
        }
    }
  },

  methods: {

      userLogin () {

        //Capturando o Formulário
        var form = document.getElementById('formLogin');

        //Se houver algum campo do Formulário não preenchido, ou preenchido incorretamente, ou seja: algum campo não-válido, então entra neste if.
        if (form.checkValidity() === false) 
        {
            //Adicionando ao <form> a class="was-validated" a qual acionará os elementos que possuem [class="invalid-feedback"] e deixará os campos de <input> em vermelho.
            form.classList.add('was-validated')

        } else { //Se tudo OK com formulário de Login.

            if (this.email == window.sessionStorage.getItem('email') && this.password == window.sessionStorage.getItem('password')) 
            {
                window.sessionStorage.setItem('token', true);
                this.$router.push( {path: '/'} );

            } else {

                this.errors.login = 'Email e/ou Senha incorretos';
            }

        }
        
      },

      
  },
 

};

</script>



<style scoped>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
  font-size: 3.5rem;
  }
}

</style>
