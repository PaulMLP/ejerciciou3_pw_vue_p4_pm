<template>
  <div class="tabla">
    <table summary="Vehiculos">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Placa</th>
          <th scope="col">Propietario</th>
          <th scope="col">Tipo</th>
          <th scope="col">Color</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehiculo in vehiculos" :key="vehiculo.id">
          <th scope="row">{{ vehiculo.id }}</th>
          <td>{{ vehiculo.placa }}</td>
          <td>{{ vehiculo.propietario }}</td>
          <td>{{ vehiculo.tipo }}</td>
          <td>{{ vehiculo.color }}</td>
          <td>
            <Button @click="visualizar(vehiculo.placa)">Visualizar</Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  obtenerTodosVehiculosFachada,
  obtenerVehiculoFachada,
} from "@/modules/inventario/helpers/VehiculoCliente";
export default {
  data() {
    return { vehiculos: [] };
  },
  async mounted() {
    this.vehiculos = await obtenerTodosVehiculosFachada();
  },
  methods: {
    async visualizar(placa) {
      this.$emit("vehiculo", await obtenerVehiculoFachada(placa));
    },
  },
};
</script>

<style scoped>
table {
  color: white;
}
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid black;
}
tbody tr:nth-child(odd) {
  background-color: #44644d;
}

tbody tr:nth-child(even) {
  background-color: #90b39a;
}

thead tr {
  background-color: #000000;
}
</style>
