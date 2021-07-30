<template>
    <section class="text-xs pokemon-card" :style="colorCard">
        <div class="titles-pokemon">
            <h1 class="title-pokemon title-pokemon-name" >{{pokemonProp.name}}</h1>
            <h3 class="title-pokemon title-pokemon-id">#{{pokemonProp.id}}</h3>
        </div>
        <div class="pokemon-types-sprite">
            <img class="pokemon-types-sprite-individual pokemon-types-sprite-individual-sprite" :src="`https://play.pokemonshowdown.com/sprites/xyani/${pokemonProp.name}.gif`" :alt="pokemonProp.name"/>
            <h2 class="pokemon-types-sprite-individual pokemon-types-sprite-individual-types" v-for="(type, index) in pokemonProp.types" :key="index">{{type.type.name}}</h2>
        </div>
        <div class="pokemon-chars">
            <div class="pokemon-chars-temp">
                <p>{{pokemonProp.weight || null}} kg</p>
                <p><b>Weight</b></p>
            </div><div class="vl"></div>
            <!-- <div class="pokemon-chars-temp">
                <p>{{pokemonProp.moves[0].move.name || null}}</p>
                <p>{{pokemonProp.moves[1].move.name || null}}</p>
                <p>Moves</p>
            </div><div class="vl"></div> -->
            <div class="pokemon-chars-temp">
                <p>{{pokemonProp.height || null}} cm</p>
                <p><b>Height</b></p>
            </div>
        </div>
        
        
        
    </section>
</template>

<script>
import axios from 'axios'

export default {
    
    props: ['pokemonProp'],
    computed: {
        colorCard() {
            //console.log(this.pokemonProp.types[0].type.name)
            if(this.pokemonProp.types[0].type.name === 'grass') return 'background-color:rgba(48, 220, 96, 0.39);'
            if(this.pokemonProp.types[0].type.name === 'fire') return 'background-color:rgba(246, 126, 13, 0.54);'
            if(this.pokemonProp.types[0].type.name === 'water') return 'background-color:rgba(10, 121, 190, 0.51);'
            if(this.pokemonProp.types[0].type.name === 'normal') return 'background-color:rgba(204, 201, 170, 0.56);'
            if(this.pokemonProp.types[0].type.name === 'flying') return 'background-color:rgba(94, 185, 180, 0.48);'
            if(this.pokemonProp.types[0].type.name === 'bug') return 'background-color:rgba(189, 221, 110, 0.7);'
            if(this.pokemonProp.types[0].type.name === 'poison') return 'background-color:rgba(168, 25, 215, 0.37);'
            if(this.pokemonProp.types[0].type.name === 'electric') return 'background-color:rgba(255, 250, 37, 0.46);'
            if(this.pokemonProp.types[0].type.name === 'ground') return 'background-color:rgba(226, 209, 91, 0.48);'
            if(this.pokemonProp.types[0].type.name === 'fighting') return 'background-color:rgba(232, 18, 26, 0.4);'
            if(this.pokemonProp.types[0].type.name === 'psychic') return 'background-color:rgba(237, 15, 100, 0.47);'
            if(this.pokemonProp.types[0].type.name === 'rock') return 'background-color:rgba(120, 107, 63, 0.48);'
            if(this.pokemonProp.types[0].type.name === 'ice') return 'background-color:rgba(102, 209, 229, 0.43);'
            if(this.pokemonProp.types[0].type.name === 'ghost') return 'background-color:rgba(189, 152, 203, 0.43);'
            if(this.pokemonProp.types[0].type.name === 'dragon') return 'background-color:rgba(139, 86, 254, 0.41);'
            if(this.pokemonProp.types[0].type.name === 'dark') return 'background-color:rgba(79, 79, 79, 0.43);'
            if(this.pokemonProp.types[0].type.name === 'steel') return 'background-color:rgba(187, 197, 196, 0.54);'
            if(this.pokemonProp.types[0].type.name === 'fairy') return 'background-color:rgba(255, 160, 194, 0.38);'
        }
    },
    
}
</script>

<style scoped>
    .pokemon-card{
        margin-left: 40px;
        margin-top: 10px;
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
        border: solid rgba(0, 0, 0, 0.603) 2px;
        font-size: 7px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 4px;
        margin: 3px;
        padding: 4px;
        color: rgba(0, 0, 0, 0.651);
    }
    .pokemon-types-sprite-individual-sprite{
        margin-top: -10px;
        width: 70px;
        height: 70px;
        margin-right: 10px;
    }
    .pokemon-chars{
        font-size: 10px;
        display: flex;
        flex-flow: row nowrap;
        background: rgba(255, 255, 255, 0.74);
        border-radius: 7.10497px;
        height: 60px;
        justify-content: center;
        align-items: center; 
        color: rgba(0, 0, 0, 0.734);      
    }
    .pokemon-chars-temp{
        padding: 3px;
        margin: auto;
    }
    .vl {
        border-left: 1px solid rgb(158, 158, 158);
        height: 40px;
    }
      
</style>