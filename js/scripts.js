//pokedex
let pokemonRepository = (function () {
    let modalContainer = document.querySelector('#modal-container');
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //add new pokemon to pokemonList
    function add(pokemon) {
        if (typeof (pokemon) === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon) {
            pokemonList.push(pokemon);
        } else {
            console.log('wrong data type');
        }
    }

    function getAll() {
        return pokemonList;
    }

    //loaded pokemon
    function loadList() {
        let apiUrlCurrent = apiUrl ;
        return fetch(apiUrlCurrent).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    //show a modal on top of list of pokemons that displays the detais of the clicked pokemon
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

        // check back
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
    //should remove modal.. but not working-----------
    function hideModal() {

        modalContainer.classList.remove('is-visible');
    }

    //remove Modal when escape key is hit
    window.addEventListener('keydown', function (event) {

        if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });





    //remove Modal when escape key is hit
    window.addEventListener('keydown', function (event) {

        if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    //if user clicks a pokemon, call function to first load details then display them
    function displayPropertiesOnClick(pokemon, button) {
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    //function to add one pokemon to list displayed on websites DOM
    function addListItem(pokemon) {
        let displayPokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('listItemButton');
        listItem.appendChild(button);
        displayPokemonList.appendChild(listItem);
        displayPropertiesOnClick(pokemon, button);
    }

    //load details 
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.imageUrlBack = details.sprites.back_default;
            item.height = details.height;
            item.types = details.types;
            item.abilities = details.abilities;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        })
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadDetails: loadDetails,
        showDetails: showDetails,
        loadList: loadList
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});



  