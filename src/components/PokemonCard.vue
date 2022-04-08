<template>
  <div v-if="error">error</div>
  <div v-if="pokemon">
    <router-link :to="{ name: 'PokemonDetail', params: { id: pokemon.name }}">
      <div class="card" >
        <img :src="imageUrl" :alt="pokemon.name"/>
        <div class="card-content">
          <p>{{ hashtag(pokemon.id.toString()) }}</p>
          <h1>{{ capitalize(pokemon.name) }}</h1>
          <div class="card-types">
            <TypeChip v-for="item in types" :type="item"/>
          </div>
        </div>
      </div>
    </router-link>
  </div>
  <div v-else>
    No Hay data
  </div>
</template>

<script>
  import { getPokemon } from '@/requests/pokemon';
  import TypeChip from '@/components/TypeChip.vue'
  import { capitalizeText } from '@/utils/filters';
  export default {
    name: 'ProductCard',
    props: {
      name: String
    },
    components: {
      TypeChip
    },
    data() {
      return {
        error: null,
        pokemon: null,
        imageUrl: '',
        types: []
      }
    },
    computed: {
      capitalize() {
        return (text) => capitalizeText(text)
      },
      hashtag() {
        return (text) => {
          const data = text.split('');
          if(data.length == 1) {
            return '#00' + text;
          } else {
            return '#0' + text
          }
        }
      }
    },
    mounted() {
      getPokemon(this.name)
      .then((data) => {
        this.pokemon = data
        this.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
        this.types = data.types
      })
      .catch((error) => this.error = error);
    }
  }
</script>

<style>
  .card {
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    text-align: start;
  }
  .card img{
    background-color: #eee;
    border-radius: 10px;
  }

  .card:hover {
    transform: translateY(-10px);
  }

  .card-content {
    padding: 10px;
  }

  .card-content p{
    color: grey;
  }

  .card-types {
    text-align: right;
  }

</style>