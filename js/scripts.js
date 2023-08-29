let pokemonList =[
{name:"Bulbasaur", types:["grass"," poison"],hieght:".7" },
{name:"Ivysaur", types:["grass"," poison" ], hieght:"1" },
{name:"Venusaur", types:["grass"," poison"] , hieght:"2" },
{name:"Charmander", types:"fire" , hieght:".6" },
{name:"Charmeleon", types:"fire" , hieght:"1.1" },
{name:"Charizard", types:["fire"," flying" ], hieght:"1.7" }]

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].hieght <1){
        document.write(pokemonList[i].name," is a ", pokemonList[i].types," type", "<br>", " hieight is ", pokemonList[i].hieght, " meters. Thats small <br>",)
    }

    else if (pokemonList[i].hieght >1.5) {
        document.write(pokemonList[i].name," is a ", pokemonList[i].types," type", "<br>", " hieight is ", pokemonList[i].hieght, " meters. Thats Big <br>")
    }
    
     else {
        document.write(pokemonList[i].name," is a ", pokemonList[i].types," type", "<br>", " hieight is ", pokemonList[i].hieght, " meters. <br>")  
     }
    
}

