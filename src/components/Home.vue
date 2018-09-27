<template>
<div>
    <!-- <h2 class="display-3">{{ msg }}</h2> -->
    <h3>Bike Workshops Network</h3>
    <p class="lead">Comparte y encuentra los talleres mecánicos rifados en la CDMX!</p>
    <input type="text" v-model='workshop' @keyup.enter='created'>
      <ul>
        <li v-for='(workshopName, key) in workshops' :key='key' >
          {{workshopName.name}}
          <button>Edit</button>
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
      workshops: {}
      // msg: 'Bienvenido/a a Garnachapp'
    }
  },
  methods: {
    addWorkshop () {
      // this.workshops.push(this.workshop)
      firebase.database().ref('workshops').push({name: this.workshop})
        .then((data) => [console.log(data)])
        .catch((error) => [console.log(error)])
    },
    created () {
      firebase.database().ref('workshops').on('value', (snapshot) => {
        // console.log(snapshot.val())
        this.workshops = snapshot.val()
      })
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
