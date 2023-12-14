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
  let modalContainer = document.querySelector('#modal-container');

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

//modal---------------------------------------------------------------------------------------------------------------------------------

function showModal(pokemon) {

  //Clear all existing modal content
  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'close';
  closeButtonElement.addEventListener('click', hideModal);

  //read all pokemon abilities from array pokemon.abilities
  let allPokemonAbilities = '';
  pokemon.abilities.forEach(function (current) {
      allPokemonAbilities += ('<span class = "pokemonAbility">' + current.ability.name + '</span> ');
  });
  let pokemonAbilities = `Abilities: ${allPokemonAbilities}`;

  //read all pokemon types from array pokemon.types
  let allPokemonTypes = ''
  pokemon.types.forEach(function (current) {
      allPokemonTypes += ('<span class = "pokemonTypes">' + current.type.name + '</span> ');
  });
  let pokemonTypes = `Types: ${allPokemonTypes}`;

  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

  let imageElement = document.createElement('img');
  imageElement.src = pokemon.imageUrl;

  let contentElement1 = document.createElement('p');
  contentElement1.innerText = `Height: ${pokemon.height}`;

  let contentElement2 = document.createElement('p');
  contentElement2.innerHTML = pokemonAbilities;

  let contentElement3 = document.createElement('p');
  contentElement3.innerHTML = pokemonTypes;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(imageElement);

  // check if image showing pokemon from back exists 
  if (pokemon.imageUrlBack) {
      let imageElement2 = document.createElement('img');
      imageElement2.src = pokemon.imageUrlBack;
      modal.appendChild(imageElement2);
  }

  modal.appendChild(contentElement1);
  modal.appendChild(contentElement2);
  modal.appendChild(contentElement3);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');

  modalContainer.addEventListener('click', function (e) {
      let target = e.target;
      if (target === modalContainer) {
          hideModal();
      }
  });
}

function hideModal() {

  modalContainer.classList.remove('is-visible');
}

//remove Modal when escape key is hit
window.addEventListener('keydown', function (event) {

  if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
  }
});

//click
function displayPropertiesOnClick(pokemon, button) {
  button.addEventListener('click', function () {
      showDetails(pokemon);
  });
  };
ite("test")