
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

]



for (let i = 0; i <pokemonList.length; i++){
    if (pokemonList[i].height <1)
     {document.write( pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ", pokemonList[i].height, 'meters. Thats small'," <br>");
    }
    

    else if (pokemonList[i].height >1.5) {document.write(pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ",pokemonList[i].height, " meters. Thats Big" , " <br>");
    }
    
     else {document.write(pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ", pokemonList[i].height, " meters.", " <br>");
     };
}






