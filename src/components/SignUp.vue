<template>
  <div class="container">
    <div class="row">
      <div class="col-">
        <form @submit.prevent="signUp">
          <h3>Registrarme</h3>
          <input type="email" v-model="email" placeholder="Ingresa tu correo">
          <input type="password" v-model="password" placeholder="Ingresa una contraseña">
          <button class="btn btn-warning">Regístrame!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    signUp () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => this.$router.replace('Form'),
          error => console.error(error)
        )
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form > * {
  display: block;
}
</style>
