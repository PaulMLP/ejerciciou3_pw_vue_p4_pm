<template>
 <Inventario/>
</template>

<script>
import Inventario from './modules/inventario/pages/Inventario.vue'

export default {
  name: 'App',
  components: {
    Inventario
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
