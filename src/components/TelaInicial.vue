<template>
  <div>
    <link rel="stylesheet" href="bootstrap.css">
    <h1>PropCar</h1>
    <a class="logout" @click="logout()" href="#">Logout</a>
    <h2>É o bixo!</h2>
    <slice/>
    <div class="row">
      <div class="col">
        <pessoa-crud/>
      </div>
      <div class="col">
        <auto-crud/>
      </div>
    </div>
  </div>
</template>

<script>
import SliceComponent from './SliceComponent.vue'
import PessoaCrudComponent from './PessoaCrudComponent.vue'
import AutomovelCrudComponent from './AutomovelCrudComponent.vue'
import router from '../router';

export default {
  name: 'TelaInicial',
  components: {
    'slice': SliceComponent,
    'pessoa-crud': PessoaCrudComponent,
    'auto-crud':AutomovelCrudComponent
  },
  methods: {
    logout() {
      this.$store.state.token = null;
      router.push("login");
    }
  }
}
</script>

<style>
.componente{
  background-color: lightgreen;
  margin: 20px;
}
</style>
