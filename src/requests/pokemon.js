export const getPokemons = async () => {
  try {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon');
    if(!data.ok) {
      throw Error('No data available!')
    }
    return data.json();
  } catch (error) {
    console.error(error);
  }
}

export const getPokemon = async (name) => {
  try {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if(!data.ok) {
      throw Error('No data available!')
    }
    return data.json();
  } catch (error) {
    console.error(error);
  }
}