<template>
<div>
    <!-- <h2 class="display-3">{{ msg }}</h2> -->
    <h3>Bike Workshops Network</h3>
    <p class="lead">Comparte y encuentra los talleres mecánicos rifados en la CDMX!</p>
    <input type="text" v-model='workshop' @keyup.enter='addWorkshop'>
      <ul>
        <li v-for='workshopName in workshops' :key='workshopName' >
          {{workshopName}}
        </li>
      </ul>
    <button class="btn btn-dark" v-on:click="logout">Cierra Sesión</button>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Home',
  data () {
    return {
      workshop: null,
      workshops: ['Mr.Bueno', 'BeSpoke']
      // msg: 'Bienvenido/a a Garnachapp'
    }
  },
  methods: {
    addWorkshop () {
      this.workshops.push(this.workshop)
    },

    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style>
</style>
