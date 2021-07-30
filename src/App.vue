<template>
  <div>
    <Pokemon-grid />
    <h1>Menu pokedex</h1>
    
  </div>
</template>

<script>
import PokemonGrid from './components/PokemonGrid.vue'



export default {
  name: 'App',
  components: {
    PokemonGrid
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'PressStart2PRegular';
  
}

</style>
