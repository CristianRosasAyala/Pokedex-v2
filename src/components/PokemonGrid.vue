<template>
    <div :style="backgroundLoadedComputed">
        <!-- <button @click="mostrarPokemons">show pokemons</button> -->
        <!-- <button @click="mostrarPokemonsIndividuales">show individual pokes</button> -->
        <!-- <Button class="pi pi-angle-double-left" @click="prevList(pokemons.previous)" />
        <Button class="pi pi-angle-double-right" @click="nextList(pokemons.next)" /> -->
        <div class="card flex flex-wrap align-items-center justify-content-center " >
            <div class="pi pi-angle-double-left transition-colors transition-duration-500 bg-blue-100 hover:bg-blue-300 text-blue-500 hover:text-white
            flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3 shadow-3 " @click="prevList(pokemons.previous)" ></div>
            <div class="transition-colors transition-duration-500 bg-blue-100 hover:bg-blue-300 text-blue-500 hover:text-white
            flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3 shadow-3 " @click="visibleTop = true">
                Pokedex
            </div>
            <div class="pi pi-angle-double-right transition-colors transition-duration-500 bg-blue-100 hover:bg-blue-300 text-blue-500 hover:text-white
            flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3 shadow-3 " @click="nextList(pokemons.next)"></div>
        </div>
        <article class="pokemon-grid grid">
            <Pokemon-card 
                :pokemonProp="pokemon" 
                v-for="(pokemon, index) in pokemonsComplete" 
                :key="index" 
                class="col-2 box shadow-8"
                
            />
        </article>
        <component :is="contentLoadedComputed" />
        <Sidebar v-model:visible="visibleTop" position="top">Coming soon...</Sidebar>
    </div>
    
</template>

<script>
import axios from 'axios'
import PokemonCard from './PokemonCard.vue'
import PokeballLoader from './PokeballLoader.vue';
export default {
  created() { 
      this.getPokemons();
      this.contentLoaded = true;
  },
  data() {
      return {
          visibleTop: false,
          pokemons: [],
          pokemonsComplete: [],
          contentLoaded: true,
          backgroundLoaded: ''
      }
  },
  computed: {
      contentLoadedComputed() {
          return (this.contentLoaded === true) ? '' : 'PokeballLoader'
      },
      backgroundLoadedComputed() {
          return (this.contentLoaded === true) ? '' : 'rgba(0, 0, 0, 0.54); opacity: 50%;'
      }
  },
  components: { PokemonCard, PokeballLoader },
  methods: {
      async getPokemons (url = 'https://pokeapi.co/api/v2/pokemon/') {
          try {
            this.contentLoaded = false;
            let pokearray = []
            let dataPokes = await axios.get(url)
            this.pokemons = await dataPokes.data
            
            for (let index = 0; index < this.pokemons.results.length; index++) {
                let individualPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemons.results[index].name}/`)
                pokearray.push(individualPoke.data)
                
            }
            this.pokemonsComplete = pokearray

          } catch (error) {
              console.error(error)

          } finally{
              this.contentLoaded = true

          }
      },
     mostrarPokemons(){
         console.log(this.pokemons)
     },
     nextList(url){
         url ? this.getPokemons(url) : console.log('nada')
      },
     prevList(url){
         url ? this.getPokemons(url) : console.log('nada')
      },
      mostrarPokemonsIndividuales(){
          console.log(this.pokemonsComplete)
      }
  },

}
</script>

<style scoped>
    .pokemon-grid{
        background: rgba(0, 0, 0, 0.54);
        padding-bottom: 30px;
        margin-top: 30px;
        border-radius: 10px;
    }
    .pokemon-title{
        display: inline; 
        margin: 30px 30px;
        
    }
</style>