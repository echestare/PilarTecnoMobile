// const BASE_URL = "https://pokeapi.co/api/v2"
// const BASE_URL = "https://pokeapi.co/api/v2/pokedex"
const BASE_URL = "https://pokeapi.co/api/v2/generation"
export const IMG_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

export const getPokemonList = (n, next) => {
// export const getPokemonList = (next) => {
// export const getPokemonList = (previous, next) => {
    const url = next?next:`${BASE_URL}/${n}`;
    // const url = next?next:`${BASE_URL}/pokemon/?limit=20`;
    // const url = next?next: (previous?previous:`${BASE_URL}/pokemon/?limit=20`);

    return fetch(url)
    .then(res => res.json())
    .then(data => {
        return Promise.resolve(data)
    })
    .catch(err => {
        throw err
    })
}

export const getPokemon = (url) => {
    return fetch(`${url}`)
    .then(res => res.json())
    .then(data => {
        return Promise.resolve(data)
    })
    .catch(err => {
        throw err
    })
}