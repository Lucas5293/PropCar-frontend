<template>
  <div id="automovel-crud-componente" class="componente">
    <div v-if="mostrarSecaoCarros">
      <h3>Cadastro Carros</h3>
      <table id="crudauto">
        <!--<tr>
          <td>
            ID:</td><td> <input type="text" name="id">
          </td>
        </tr>-->
        <tr>
          <td>
            Modelo:</td>
          <td>
            <input type="text" v-model="carroEdit.modelo">
          </td>
        </tr>
        <tr>
          <td>
            Cor:
          </td>
          <td> 
            <input type="text" v-model="carroEdit.cor">
          </td>
        </tr>
        <tr>
          <td>
            RENAVAM:
          </td>
          <td>
            <input type="text" v-model="carroEdit.renavam">
          </td>
        <tr>
          <td></td><td><button v-on:click="salvarCarro()" >Enviar</button></td>
        </tr>
      </table>
      <table class="table">
        <tr>
            <th>Id</th>
            <th>Modelo</th> 
            <th>Cor</th>
          </tr>
          <tbody>
            <tr v-for="carro in carros" :key="carro.id">
              <td>{{carro.id}}</td>
              <td>{{carro.modelo}}</td> 
              <td>{{carro.cor}}</td>
            </tr>
          </tbody>
      </table>
    </div>
    <div v-if="!mostrarSecaoCarros">
      <h2>Usuário não tem a autorização para gerenciar essa seção</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AutomovelCrudComponent',
  data() {
    return {
      mostrarSecaoCarros: true,
      carroEdit: {},
      carros: []
    } 
  },
  methods:{
    salvarCarro() {
      axios.post('/automovel', this.carroEdit, {headers: { Authorization: this.$store.state.token}})
      .then(res => {
        this.carros = res.data
        this.obtemListaCarros();
        this.carroEdit = {};
      }).catch(error => console.log(error))
    },
    obtemListaCarros() {
      axios.get('/automoveis', { headers: { Accept: 'application/json', Authorization: this.$store.state.token}})
      .then(res => {
        this.carros = res.data
      }).catch(error => {
        if (error.response.status === 403) {
          this.mostrarSecaoCarros = false;
        }
        console.log(error);
      })
    }
  },
  created () {
    this.obtemListaCarros();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #automovel-crud-componente{
    min-height: 300px;
  }
  #crudauto {
    margin-left: auto;
    margin-right: auto;
  }

</style>
