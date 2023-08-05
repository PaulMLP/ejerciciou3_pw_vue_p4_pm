<template>
  <div class="inventario">
    <TablaVehiculos @vehiculo="obtenerVehiculo($event)" />
    <DatosVehiculo v-if="vehiculo" :vehiculo="vehiculo" />
  </div>
</template>

<script>
import DatosVehiculo from "../components/DatosVehiculo.vue";
import TablaVehiculos from "../components/TablaVehiculos.vue";
export default {
  components: { TablaVehiculos, DatosVehiculo },
  data() {
    return {
      vehiculo: null,
    };
  },
  methods: {
    obtenerVehiculo(ve) {
      console.log("recibio", ve);
      this.vehiculo = ve;
    },
  },
};
</script>

<style scoped></style>
