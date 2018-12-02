<template>
  <div id="pessoa-crud-componente" class="componente">
    <h3>Cadastro Pessoa</h3>
    <table id="crudpessoa">
      <tr>
        <td>
          Nome:
        </td>
        <td>
          <input type="text" v-model="pessoaEdit.nome">
        </td>
      </tr>
      <tr>
        <td>
          CEP:
        </td>
        <td>
            <input type="text" v-model="pessoaEdit.cep">
        </td>
      </tr>
      <tr>
        <td>
          Data de Nascimento:
        </td>
        <td>
          <input type="text" v-model="pessoaEdit.dataNascimento">
        </td>
      </tr>
      <tr>
        <td>
          Telefone:
        </td>
        <td>
          <input type="text" v-model="pessoaEdit.telefone">
        </td>
      </tr>
      <tr>
        <td></td><td><button v-on:click="salvarPessoa()">Enviar</button></td>
      </tr>
    </table>
    <table class="table">
       <tr>
          <th>Id</th>
          <th>Nome</th> 
          <th>Telefone</th>
        </tr>
        <tbody>
          <tr v-for="pessoa in pessoas" :key="pessoa.id">
            <td>{{pessoa.id}}</td>
            <td>{{pessoa.nome}}</td> 
            <td>{{pessoa.telefone}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PessoaCrudComponent',
  data(){
    return {
      pessoaEdit: {}
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
    salvarPessoa() {
      axios.post('/pessoas', this.pessoaEdit)
      .then(res => {
        this.pessoas = res.data
        this.obtemListaPessoas();
        this.pessoaEdit = {};
      }).catch(error => console.log(error))
    },
    obtemListaPessoas() {
      axios.get('/pessoas', { headers: { Accept: 'application/json' } })
      .then(res => {
        this.pessoas = res.data
      }).catch(error => console.log(error))
    }
  },
  created () {
    this.obtemListaPessoas();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #pessoa-crud-componente{
    min-height: 300px; 
  }
  #crudpessoa{
    margin-right:auto; 
    margin-left:auto;
  }
</style>
