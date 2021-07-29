<template>
  <section class="pokemon-card">
     <h1 style="color: blue;">Name : {{pokemonProp.name}}</h1>
     <h2 style="color: blue;" v-for="(type, index) in pokemonProp.types" :key="index">{{type.type.name}}</h2>
  </section>
</template>

<script>
import axios from 'axios'

export default {
    
    props: ['pokemonProp'],
    
}
</script>

<style scoped>
    .pokemon-card{
        background-color: blueviolet;
        width: 300px;
        height: 150px;
        
    }
</style>