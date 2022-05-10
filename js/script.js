let pokemonRepository = (function(){
    let pokemonList = [
   {
     name: 'Bulbasaur',
     height: 0.7,
     weight: '6.9 kg',
     Abilities: ['Chlorophyll', 'overgrow'],
     EggGroups: ['Monster', 'Grass'],
     type: ['poison', 'grass']
   },

   {
     name: 'Ivysaur',
     height: 1,
     Weight: '13 kg',
     Abilities: ['Chlorophyll', 'overgrow'],
     EggGroups: ['Monster', 'Grass'],
     type: ['poison', 'grass']
   },

   {
     name: 'Venusaur',
     height: 2,
     Weight: '100 kg',
     Abilities: ['Chlorophyll', 'overgrow'],
     EggGroups: ['Monster', 'Grass'],
     type: ['monster', 'grass']
   },

   {
     name: 'Charmender',
     height: 0.6,
     Weight: '8.5 kg',
     Abilities: ['blaze', 'solar-power'],
     EggGroups: ['Monster', 'Dragon'],
     type: ['fire']
   },

   {
     name: 'charmeleon',
     height: 1.1,
     Weight: '19 kg',
     Abilities: ['blaze', 'solar-power'],
     EggGroups: ['Monster', 'Dragon'],
     type: ['fire']
   },

   {
     name: 'charizard',
     height: 1.7,
     Weight: '90.5 kg',
     Abilities: ['blaze', 'solar-power'],
     EggGroups: ['Monster', 'Dragon'],
     type: ['fire', 'flying']
   }
 ];

 function add (pokemon) {
   pokemonList.push(pokemon)
 }

 function getAll () {
   return pokemonList
 }
 return {
   add: add,
   getAll: getAll
 }

 })();
 console.log(pokemonRepository.getAll())
 pokemonRepository.add({ name: 'squirtel', height: 0.5,  weight:'9 kg', Abilities:['rain-dish', 'torrent'], type: 'water' })
 console.log(pokemonRepository.getAll())


let bigPokemon = 'Wow, that is big!';
let smallPokemon ="that is small!"

// forEach loop and conditional statement
pokemonList.forEach(function (pokemon) {
    if (pokemon.height > 1.0) {
   document.write(`<p>${pokemon.name} : (height:${pokemon.height}) - ${bigPokemon},</p>   `); 
}else {
    document.write(`<p>${pokemon.name} : (height:${pokemon.height}) - ${smallPokemon},</p>`); 
}
document.write("<br>")
})
