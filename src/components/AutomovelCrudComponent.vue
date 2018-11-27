<template>
  <div id="automovel-crud-componente" class="componente">
    <h3>Cadastro Carros</h3>
    <table id="crudauto">
      <tr>
        <td>
          Carro:</td><td><input type="text" name="carro">
        </td>
      </tr>
      <tr>
        <td>
          ID:</td><td> <input type="text" name="id">
        </td>
      </tr>
      <tr>
        <td>
          Modelo:</td><td> <input type="text" name="modelo">
        </td>
      </tr>
      <tr>
        <td>
          Cor:</td><td> <input type="text" name="cor">
        </td>
      </tr>
      <tr>
        <td>
          RENAVAM:</td><td> <input type="text" name="renavam">
        </td>
      <tr>
        <td></td><td><input type="button" value="Enviar"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AutomovelCrudComponent',
  props: {
    msg: String
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
