<template>
  <div>
    <form @submit.prevent="login">
      <h2>Regístrate</h2>
      <input type="email" v-model="email" placeholder="Ingresa tu correo">
      <input type="password" v-model="password" placeholder="Ingresa una contraseña">
      <button>Adelante!</button>
    </form>
    <pre>
      {{ $data }}
    </pre>
    <!-- <form @submit.prevent="signIn">
      <h2>Ingresa</h2>
      <input type="email" v-model="email" placeholder="Ingresa tu correo">
      <input type="password" v-model="password" placeholder="Ingresa una contraseña">
      <button>Adelante!</button>
    </form> -->
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => alert('Usuario conectado'), (error) => console.error(error))
    }
  }
}

</script>

<style scoped>
</style>
