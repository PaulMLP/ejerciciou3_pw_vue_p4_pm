<template>
  <div class="datos">
    <div class="datos-v">
      <div class="campos">
        <label for="">Id</label>
        <input type="text" v-model="vehiculo.id" disabled />
      </div>
      <div class="campos">
        <label for="">Placa</label>
        <input type="text" v-model="vehiculo.placa" disabled />
      </div>
      <div class="campos">
        <label for="">Propietario</label>
        <input type="text" v-model="vehiculo.propietario" disabled />
      </div>
      <div class="campos">
        <label for="">Tipo</label>
        <input type="text" v-model="vehiculo.tipo" disabled />
      </div>
      <div class="campos">
        <label for="">Color</label>
        <input type="text" v-model="vehiculo.color" disabled />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
    props: {
      vehiculo: {
        typed: Object,
        required: true,
      },
    },
};
</script>

<style scoped></style>
