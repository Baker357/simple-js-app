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
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  // making button
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
