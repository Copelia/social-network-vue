<template>
<div>
    <p>{{ msg }}</p>
    <a @click="signOut">Log Out</a>
</div>
</template>

<script>
// import firebase from 'firebase/app'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Probando'
    }
  },
  methods: {
    signOut () {
    //   firebase.auth().signOut().then(() => )
    }
  }
}
</script>

<style>
</style>
