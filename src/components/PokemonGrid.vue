<template>
    <div>
        <button @click="mostrarPokemons">show pokemons</button>
        <button @click="nextList(pokemons.next)">Siguiente</button>
        <button @click="prevList(pokemons.previous)">Anterior</button>
        <button @click="mostrarPokemonsIndividuales">show individual pokes</button>
        <article class="pokemon-grid grid">
            <Pokemon-card 
                :pokemonProp="pokemon" 
                v-for="(pokemon, index) in pokemonsComplete" 
                :key="index" 
                class="col-2 box shadow-8"
                
            />
        </article>
    </div>
    
</template>

<script>
import axios from 'axios'
import PokemonCard from './PokemonCard.vue'
export default {
  created() { 
      this.getPokemons();
  },
  data() {
      return {
          pokemons: [],
          pokemonsComplete: []
      }
  },
  components: { PokemonCard },
  methods: {
      async getPokemons (url = 'https://pokeapi.co/api/v2/pokemon/') {
          try {
            let pokearray = []
            let dataPokes = await axios.get(url)
            this.pokemons = await dataPokes.data
            
            for (let index = 0; index < this.pokemons.results.length; index++) {
                let individualPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemons.results[index].name}/`)
                pokearray.push(individualPoke.data)
                
            }
            this.pokemonsComplete = pokearray
            //console.log(this.pokemonsComplete)
            
            
          } catch (error) {
              console.error(error)
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
    }
</style>