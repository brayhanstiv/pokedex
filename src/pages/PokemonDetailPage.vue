<template>
  <div v-if="error">error</div>
  <div v-if="pokemon">
      <div class="card-detail" >
        <div>
          <h1>{{ capitalize(pokemon.name) }}</h1>
          <span>{{ hashtag(pokemon.id.toString()) }}</span>
        </div>
        <div class="card-detail-content">
          <img :src="imageUrl" :alt="pokemon.name"/>
          <div class="card-detail-features">
            <ul>
              <li>Height: {{pokemon.height}}</li>
              <li>Weight: {{pokemon.weight}}</li>
              <li>Abilities: <span v-for="item in abilities" class="abilities">{{item.ability.name}}</span></li>
            </ul>
            <h2>Types</h2>
            <div class="card-types">
              <TypeChip v-for="item in types" :type="item"/>
            </div>
          </div>
        </div>
      </div>
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
    name: 'PokemonDetailPage',
    data() {
      return {
        name: this.$route.params.id
      }
    },
    components: {
      TypeChip
    },
    data() {
      return {
        error: null,
        pokemon: null,
        imageUrl: '',
        types: [],
        abilities: [],
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
      getPokemon(this.$route.params.id)
      .then((data) => {
        this.pokemon = data
        this.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
        this.types = data.types
        this.abilities = data.abilities
      })
      .catch((error) => this.error = error);
    }
  }
</script>

<style>
  .card-detail {
    background-color: white;
    width: 90%;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    text-align: center;
    margin: 40px auto;
    padding: 20px;
  }

  .card-detail h1 {
    display: inline;
    margin-right: 10px;
  }

  .card-detail span {
    font-size: 30px;
  }

  .card-detail-content {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  .card-detail-content img{
    background-color: #eee;
    border-radius: 10px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .card-detail-content {
      display: flex;
      flex-direction: row;
    }
    .card-detail-content img{
      width: 50%;
    }
  }

  .card-detail-features {
    margin-left: 20px;
    text-align: left;
  }

  .card-detail-features h2{
    margin-bottom: 20px;
  }

  .card-detail-features .abilities {
    background-color: #ccc;
    font-size: 15px;
    padding: 2px 10px;
    margin-right: 10px;
    border-radius: 10px;
  }

</style>