<template>
    <div>
      <form @submit.prevent="signUp">
        <h2>Registrarme</h2>
        <input type="email" v-model="email" placeholder="Ingresa tu correo">
        <input type="password" v-model="password" placeholder="Ingresa una contraseña">
        <button>Adelante!</button>
    </form>
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
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => alert('Your account has been created!'), (error) => console.error(error))
    }
  }
}
</script>
