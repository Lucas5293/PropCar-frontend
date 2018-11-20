<template>
  <div id="app">
    <link rel="stylesheet" href="bootstrap.css">
    <h1>PropCar</h1>
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
import SliceComponent from './components/SliceComponent.vue'
import PessoaCrudComponent from './components/PessoaCrudComponent.vue'
import AutomovelCrudComponent from './components/AutomovelCrudComponent.vue'

export default {
  name: 'app',
  components: {
    'slice': SliceComponent,
    'pessoa-crud': PessoaCrudComponent,
    'auto-crud':AutomovelCrudComponent
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
