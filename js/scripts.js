let pokemonRepository = (function () {
    let pokemonList = [];
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    return {
      add: add,
      getAll: getAll
    };
  })();

let pokemonList =[
{name:"Bulbasaur", types:["grass"," poison"],hieght:".7" },
{name:"Ivysaur", types:["grass"," poison" ], hieght:"1" },
{name:"Venusaur", types:["grass"," poison"] , hieght:"2" },
{name:"Charmander", types:"fire" , hieght:".6" },
{name:"Charmeleon", types:"fire" , hieght:"1.1" },
{name:"Charizard", types:["fire"," flying" ], hieght:"1.7" }]

let pokeinfo = ""

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].hieght <1) {pokeinfo= pokemonList[i].name," is a ", pokemonList[i].types," type", "<br>", " hieight is ", pokemonList[i].hieght, " meters. Thats small <br>";}
    

    else if (pokemonList[i].hieght >1.5) {pokeinfo=pokemonList[i].name," is a ", pokemonList[i].types," type", "<br>", " hieight is ", pokemonList[i].hieght, " meters. Thats Big <br>";
    }
    
     else {
        pokeinfo=pokemonList[i].name," is a ", pokemonList[i].types," type", "<br>", " hieight is ", pokemonList[i].hieght, " meters. <br>";
     }
    
}
pokemonList.forEach (pokedetails);
function pokedetails(){
    document.write(pokeinfo)
}

