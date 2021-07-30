<template>
    <section class="text-xs pokemon-card" >
        <div class="titles-pokemon">
            <h1 class="title-pokemon title-pokemon-name" >{{pokemonProp.name}}</h1>
            <h3 class="title-pokemon title-pokemon-id">#{{pokemonProp.id}}</h3>
        </div>
        <div class="pokemon-types-sprite">
            <img class="pokemon-types-sprite-individual pokemon-types-sprite-individual-sprite" :src="`https://play.pokemonshowdown.com/sprites/xyani/${pokemonProp.name}.gif`"/>
            <h2 class="pokemon-types-sprite-individual pokemon-types-sprite-individual-types" v-for="(type, index) in pokemonProp.types" :key="index">{{type.type.name}}</h2>
        </div>
        <div class="pokemon-chars">
            <div class="pokemon-chars-temp">
                <p>{{pokemonProp.weight}} kg</p>
                <p>Weight</p>
            </div><div class="vl"></div>
            <div class="pokemon-chars-temp">
                <p>{{pokemonProp.moves[0].move.name}}</p>
                <p>{{pokemonProp.moves[1].move.name}}</p>
                <p>Moves</p>
            </div><div class="vl"></div>
            <div class="pokemon-chars-temp">
                <p>{{pokemonProp.height}} cm</p>
                <p>Height</p>
            </div>
        </div>

        
    </section>
</template>

<script>
import axios from 'axios'

export default {
    
    props: ['pokemonProp'],
    computed: {
        backgroundColor() {
            (this.pokemonProp.types[0] = 'grass') ? console.log('si') : console.log('no')
        }
    },
    
}
</script>

<style scoped>
    .pokemon-card{
        margin-left: 40px;
        margin-top: 10px;
        border: solid black 2px;
        border-radius: 10px;
        position: relative;
        
    }
    .titles-pokemon{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        
    }
    .title-pokemon{
        font-size: 10px;
        flex: 0 0 10px;
        margin: 10px;
    }
    .title-pokemon-id{
        opacity: 40%;
    }
    .title-pokemon-name{
        color: white;
        font-size: 13px;
    }
    .pokemon-types-sprite{
        border-radius: 2.2203px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        
        
    }
    .pokemon-types-sprite-individual{
        margin-top: 48px;
        
    }
    .pokemon-types-sprite-individual-types{
        border: solid black 3px;
        font-size: 7px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 4px;
        margin: 3px;
        padding: 4px;
    }
    .pokemon-types-sprite-individual-sprite{
        margin-top: -10px;
        width: 100px;
        height: 100px;
        margin-right: 10px;
    }
    .pokemon-chars{
        font-size: 7px;
        display: flex;
        flex-flow: row nowrap;
        background: rgba(255, 255, 255, 0.74);
        border-radius: 7.10497px;
        height: 60px;
        justify-content: center;
        align-items: center;       
    }
    .pokemon-chars-temp{
        padding: 3px;
        margin: 4px;
    }
    .vl {
        border-left: 1px solid rgb(158, 158, 158);
        height: 40px;
    }
      
</style>