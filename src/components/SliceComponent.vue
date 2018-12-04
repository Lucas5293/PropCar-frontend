<template>
  <div id="slice-componente" class="componente">
    <div v-if="mostrarSecaoCarros">
      <h5>Selecione uma pessoa e arraste pra associar (simples assim)!</h5>
      <label>Pessoa: </label>
      <select v-model="pessoaSelecionada">
        <option disabled selected>Selecione</option>
        <option v-for="pessoa in pessoas" :key="pessoa.id" v-bind:value="pessoa">
            {{pessoa.nome}}
        </option>
      </select>
      <div class="row">
        <div class="col-sm-5">
          <table class="table" style="width:100%">
            <tr>
              <th>Id</th>
              <th>Modelo</th> 
              <th>Cor</th>
            </tr>
            <tbody>
              <tr v-for="carro in carrosDisponiveis" :key="carro.id" 
                  :class="{'selected': carro === carroSelecionado}"
                  @click="selecionaCarro(carro);">
                <td>{{carro.id}}</td>
                <td>{{carro.modelo}}</td> 
                <td>{{carro.cor}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-sm-2">
          <button @click="desassocia()" :disabled="this.pessoaSelecionada.id == null">&lt;&lt;</button>
          <button @click="associa()" :disabled="this.pessoaSelecionada.id == null">&gt;&gt;</button>
        </div>
        <div class="col-sm-5">
          <table class="table" style="width:100%">
            <tr>
              <th>Id</th>
              <th>Modelo</th> 
              <th>Cor</th>
            </tr>
            <tbody>
              <tr v-for="carro in carrosAssociados" :key="carro.id"
                  :class="{'selected': carro === carroSelecionado}"
                  @click="selecionaCarro(carro);">
                <td>{{carro.id}}</td>
                <td>{{carro.modelo}}</td> 
                <td>{{carro.cor}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button class="form-control btn-success" @click="salvar()">Salvar alterações</button>
    </div>
    <div v-if="!mostrarSecaoCarros">
      <h2>Usuário não tem a autorização para gerenciar essa seção</h2>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'SliceComponent',
  data() {
    return {
      mostrarSecaoCarros: true,
      carroSelecionado: {},
      pessoaSelecionada: {},
      carrosDisponiveis: [],
      carrosAssociados: [],
    }
  },
  computed: {
    pessoas: {
      get () {
          return this.$store.state.pessoas
      },
      set (valor) {
          this.$store.state.pessoas = valor
      }
    }
  },
  methods:{
    atualizaCarrosDisponiveis(){
      axios.get('/automoveis?disponiveis=true', { headers: { Accept: 'application/json', Authorization: this.$store.state.token}})
      .then(res => {
        this.carrosDisponiveis = res.data;
      }).catch(error => {
          if (error.response.status === 403) {
            this.mostrarSecaoCarros = false;
          }
        console.log(error)
      })
    },
    atualizaCarrosAssociados() {
      if (this.pessoaSelecionada.id == null) {
        this.carrosAssociados = [];
      } else {
        axios.get('/automoveis?pessoaFisica='+this.pessoaSelecionada.id, 
          { headers: { Accept: 'application/json', Authorization: this.$store.state.token}})
        .then(res => {
          this.carrosAssociados = res.data;
        }).catch(error => console.log(error))
      }
    },
    salvar() {
      var conjunto = [];
      this.carrosDisponiveis.forEach(function(carro){
        conjunto.push(carro);
      })
      this.carrosAssociados.forEach(function(carro){
        conjunto.push(carro);
      })
      axios.post('/automoveis', conjunto, {headers: { Authorization: this.$store.state.token}})
      .then(res => {
        this.atualizaCarrosDisponiveis();
        this.pessoaSelecionada = {};
      }).catch(error => console.log(error))
    },
    selecionaCarro(carro) {
      this.carroSelecionado = carro;
    },
    associa() {
      if (this.carroSelecionado && this.pessoaSelecionada.id) {
        // Defino o id da pessoaFisica do carro
        this.carroSelecionado.pessoaFisica = this.pessoaSelecionada.id;
        // Se o carro não estiver na lista de associados
        if (this.carrosAssociados.indexOf(this.carroSelecionado) == -1) {
          // Pego os indices iniciais e finais do carro na lista
          var indexInit = this.carrosDisponiveis.indexOf(this.carroSelecionado);
          var indexEnd = indexInit == 0 ? 1 : indexInit;
          // Retiro da lista de disponíveis
          this.carrosDisponiveis.splice(indexInit, indexEnd);
          // Coloco na lista de associados
          this.carrosAssociados.push(this.carroSelecionado);
          this.carroSelecionado = null;
        }
      }
    },
    desassocia() {
      if (this.carroSelecionado && this.pessoaSelecionada.id) {
        // Retiro o id da pessoaFisica do carro
        this.carroSelecionado.pessoaFisica = null;
        // Se o carro não estiver na lista de disponíveis
        if (this.carrosDisponiveis.indexOf(this.carroSelecionado) == -1) {
          // Pego os indices iniciais e finais do carro na lista
          var indexInit = this.carrosAssociados.indexOf(this.carroSelecionado);
          var indexEnd = indexInit == 0 ? 1 : indexInit;
          // Retiro da lista de associados
          this.carrosAssociados.splice(indexInit, indexEnd);
          // Coloco na lista de disponíveis
          this.carrosDisponiveis.push(this.carroSelecionado);
          this.carroSelecionado = null;
        }
      }
    }
  },
  created() {
    this.atualizaCarrosDisponiveis();
  },
  watch: {
    pessoaSelecionada(){
      this.atualizaCarrosAssociados();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #slice-componente{
    min-height: 300px;
    background-color: lightgrey;
  }
  .selected{
    background-color:darkslategray;
    color: white;
  }
</style>
