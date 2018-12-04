<template>
  <div>
    <link rel="stylesheet" href="bootstrap.css">
    <h1>Login</h1>
    <p v-if="this.erro">Usuário ou senha incorretos</p>
    <input type="text" v-model="user.username">
    <input type="password" v-model="user.password">
    <button @click="login()" v-if="!show_loading" >Login</button>
    <br>
    <img v-if="show_loading" src="loading.gif" style="width: 128px;">
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store'
import router from '../router'

export default {
  name: 'Login',
  data() {
    return {
      "user": {},
      "erro": false,
      "show_loading": false
    }
  },
  methods:{
    login() {
      this.erro = false;
      this.show_loading = true;
      axios.post('/login', this.user)
      .then(res => {
        this.show_loading = false;
        store.state.token = res.headers.token;
        router.push("home");
      }).catch(error => {
        this.show_loading = false;
        this.erro = true;
        console.log(error)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.componente{
  background-color: lightgreen;
  margin: 20px;
}
</style>
