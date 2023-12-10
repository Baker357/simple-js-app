//list of pokemon and attributes
// const pokemonList = [{
//     name: "Bulbasaur",
//     height: .5,
//     weight: 6.9,
//     type: "grass and poison"
//   },
//   {
//     name: "Charmander",
//     height: 0.6,
//     weight: 8.5,
//     type: "fire",
//   },
//   {
//     name: "Squirtle",
//     height: 1.6,
//     weight: 9,
//     type: "water",
//   },

// ];


// loop for pokemon
// for (let i = 0; i <pokemonList.length; i++){
//     if (pokemonList[i].height <1)
//      {document.write( pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ", pokemonList[i].height, 'meters. Thats small'," <br>");
//     }
    

//     else if (pokemonList[i].height >1.5) {document.write(pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ",pokemonList[i].height, " meters. Thats Big" , " <br>");
//     }
    
//      else {document.write(pokemonList[i].name," is a ", pokemonList[i].type," type", "<br>", " hieight is ", pokemonList[i].height, " meters.", " <br>");
//      };
// }


let pokemonRepository = (function () {
  let repository = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ["fire", "flying"],
    },
    {
      name: "Squirtle",
      height: 1,
      types: ["water"],
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
function showDetails(pokemon){console.log(pokemon)}
  // making button DOM 
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener ("click", function (pokemon) {
      showDetails(pokemon);
    listpokemon.classList.add("list-group-item");
    button.classList.remove("button-class");
    button.classList.add("show-details");
    });
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});



  
  
  



