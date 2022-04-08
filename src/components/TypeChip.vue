<template lang="">
    <span class="card-type" :style="setColor(type.type.name)">
      {{capitalize(type.type.name)}}
    </span>
</template>

<script>
import { capitalizeText } from '@/utils/filters';

export default {
  name: 'TypeChip',
  props: {
    type: Object
  },
  data() {
    return {
      color: String
    }
  },
  computed: {
    capitalize() {
      return (text) => capitalizeText(text);
    },
    setColor() {
      return (name) => {
        if(name === 'grass') return 'background-color: #9BCC50;'
        if(name === 'water') return 'background-color: #4592C4;'
        if(name === 'fire') return 'background-color: #FA7D24;'
        if(name === 'poison') return 'background-color: #B97FC9;'
        if(name === 'flying') return 'background-color: #3DC7EF;'
        if(name === 'bug') return 'background-color: #729F3F;'
        if(name === 'normal') return 'background-color: grey;'
      }
    }
  }
}
</script>

<style>
  .card-type {
    margin: 0 5px;
    padding: 2px 20px;
    background-color: #ccc;
    color: white;
    border-radius: 5px;
  }
</style>