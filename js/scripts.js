//list of pokemon and attributes
const pokemonList = [{
    name: "Bulbasaur",
    height: .5,
    weight: 6.9,
    type: "grass and poison"
  },
  {
    name: "Charmander",
    height: 0.6,
    weight: 8.5,
    type: "fire",
  },
  {
    name: "Squirtle",
    height: 1.6,
    weight: 9,
    type: "water",
  },

];


// loop for pokemon
for (let i = 0; i <pokemonList.length; i++){
    if (pokemonList[i].height <1)
     {document.write( pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ", pokemonList[i].height, 'meters. Thats small'," <br>");
    }
    

    else if (pokemonList[i].height >1.5) {document.write(pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ",pokemonList[i].height, " meters. Thats Big" , " <br>");
    }
    
     else {document.write(pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ", pokemonList[i].height, " meters.", " <br>");
     };
}


// let pokemonRepository = (function () {
//   let pokemonList = [];
  
//   function add(pokemon) {
//     pokemonList.push(pokemon);
//   }

//   function getAll() {
//     return pokemonList;
//   }

//   return {
//     add: add,
//     getAll: getAll
//   }});

// document.write('hello');



 
  
  
//  function pokewrite(pokemonList) { 
//     if (pokemonList[i].height <1)
//     {document.write( pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ", pokemonList[i].height, 'meters. Thats small'," <br>");
//    }
   

//    else if (pokemonList[i].height >1.5) {document.write(pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ",pokemonList[i].height, " meters. Thats Big" , " <br>");
//    }
   
//     else {document.write(pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ", pokemonList[i].height, " meters.", " <br>");
//     };
//     return pokemonList
//   };


//   pokemonList.forEach(pokewrite);
  
  
  



