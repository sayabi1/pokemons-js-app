let pokemonList = [{name:'Bulbasaur',
height:0.7,
weight:'6.9 kg',
Abilities:['Chlorophyll','overgrow'],
EggGroups:['Monster','Grass'],
type:['poison','grass']
},

{name:'Ivysaur',
 height:1.0,
 Weight:'13 kg',
 Abilities:['Chlorophyll','overgrow'],
 EggGroups:['Monster','Grass'],
 type:['poison','grass']
},   

{name:'Venusaur',
 height:2.0,
 Weight:'100 kg',
 Abilities:['Chlorophyll','overgrow'],
 EggGroups:['Monster','Grass'],
 type:['monster','grass']
}, 

{name:'Charmender',
 height:0.6,
 Weight:'8.5 kg',
 Abilities:['blaze','solar-power'],
 EggGroups:['Monster','Dragon'],
 type:['fire']
}, 

{name:'charmeleon',
 height:1.1,
 Weight:'19 kg',
 Abilities:['blaze','solar-power'],
 EggGroups:['Monster','Dragon'],
 type:['fire']
}, 

{name:'charizard',
 height:1.7,
 Weight:'90.5 kg',
 Abilities:['blaze','solar-power'],
 EggGroups:['Monster','Dragon'],
 type:['fire','flying']
}];



let bigPokemon = 'Wow, that is big!';
let smallPokemon ="that is small!"

// array loop and conditional statement
for ( let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.0) {
   document.write(`<p>${pokemonList[i].name} : (height:${pokemonList[i].height}) - ${bigPokemon},</p>   `); 
}else {
    document.write(`<p>${pokemonList[i].name} : (height:${pokemonList[i].height}) - ${smallPokemon},</p>`); 
}
document.write("<br>");
}