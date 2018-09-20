<template>
  <div>
    <form @submit.prevent="register">
      <h2>Regístrate</h2>
      <input type="email" v-model="email" placeholder="Ingresa tu correo">
      <input type="password" v-model="password" placeholder="Ingresa una contraseña">
      <button>Adelante!</button>
    </form>
    <form @submit.prevent="signIn">
      <h2>Ingresa</h2>
      <input type="email" v-model="email" placeholder="Ingresa tu correo">
      <input type="password" v-model="password" placeholder="Ingresa una contraseña">
      <button>Adelante!</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
