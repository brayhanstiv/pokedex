<template>
  <div v-if="error">error</div>
  <div v-if="pokemons.length">
    <div class="home">
      <div v-for="item in pokemons" :key="item.id">
        <PokemonCard :name="item.name"/>
      </div>
    </div>
  </div>
  <div v-else>
    <img class="loading" src="@/assets/img/Pokeball.png" alt="Pokeball">
  </div>
</template>

<script>
  // Components
  import PokemonCard from '@/components/PokemonCard.vue';
  import { getPokemons } from '@/requests/pokemon';

  export default {
    name: 'HomePage',
    components: {
      PokemonCard
    },
    data() {
      return {
        pokemons: [],
        error: ''
      }
    },
    mounted() {
      getPokemons()
      .then((data) => this.pokemons = data.results)
      .catch((error) => this.error = error);
    },
  }
</script>

<style>
 .home {
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   width: 80vw;
   margin: 40px auto;
   padding: 20px;
   column-gap: 20px;
   row-gap: 20px;
   background-color: white;
 }

 @media(min-width: 768px) {
   .home {
     grid-template-columns: repeat(2, 1fr);
   }
 }

 @media(min-width: 1024px) {
   .home {
     grid-template-columns: repeat(3, 1fr);
   }
 }

 @media(min-width: 1280px) {
   .home {
     grid-template-columns: repeat(4, 1fr);
   }
 }

 .loading {
    width: 50px;
    margin-top: 40px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
