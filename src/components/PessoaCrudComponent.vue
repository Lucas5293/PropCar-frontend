<template>
  <div id="pessoa-crud-componente" class="componente">
    <h3>Cadastro Pessoa</h3>
    <table id="crudpessoa">
      <tr>
        <td>
          ID:</td><td><input type="text" name="id">
        </td>
      </tr>
      <tr>
        <td>
          Nome:</td><td> <input type="text" name="nome">
        </td>
      </tr>
      <tr>
        <td>
          CEP:</td><td> <input type="text" name="cep">
        </td>
      </tr>
      <tr>
        <td>
          Data de Nascimento:</td><td> <input type="text" name="dtNascimento">
        </td>
      </tr>
      <tr>
        <td>
          Telefone:</td><td> <input type="text" name="telefone">
        </td>
      </tr>
      <tr>
        <td>
          Lista de Automovéis:</td><td> <input type="text" name="ltAutomoveis">
        </td>
      </tr>
      <tr>
        <td></td><td><input type="button" value="Enviar"></td>
      </tr>
    </table>
  
  </div>
</template>

<script>
export default {
  name: 'PessoaCrudComponent',
  props: {
    msg: String
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
