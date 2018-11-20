<template>
  <div id="slice-componente" class="componente">
    <h3>Arraste para associar</h3>
    <div class="row">
      <div class="col-sm-5">
        <table class="table" style="width:100%">
          <tr>
            <th>Id</th>
            <th>Modelo</th> 
            <th>Cor</th>
          </tr>
          <tbody>
            <tr v-for="carro in carrosAssociaveis">
              <td>{{carro.id}}</td>
              <td>{{carro.modelo}}</td> 
              <td>{{carro.cor}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-2">
        <button>&lt;&lt;</button>
        <button>&gt;&gt;</button>
      </div>
      <div class="col-sm-5">
        <table class="table" style="width:100%">
          <tr>
            <th>Id</th>
            <th>Modelo</th> 
            <th>Cor</th>
          </tr>
          <tbody>
            <tr v-for="carro in carrosAssociaveis">
              <td>{{carro.id}}</td>
              <td>{{carro.modelo}}</td> 
              <td>{{carro.cor}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliceComponent',
  props: {
    carrosAssociaveis: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #slice-componente{
    min-height: 300px;
    background-color: lightgrey;
  }
</style>
