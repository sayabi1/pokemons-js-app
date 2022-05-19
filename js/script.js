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
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("pokemon-list__item")
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    addEvent(button, pokemon);
  }
  function addEvent (button, pokemon) {
    button.addEventListener('click', () => {
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

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the pokemon
      pokemon.name = pokemon.name
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
     showModal(pokemon);
    });
  }
  let modalContainer = document.querySelector('#modal-container');
 function showModal(pokemon) {
   modalContainer.innerText = '';

   let modal = document.createElement('div');
   modal.classList.add('modal');

   // creating close button

   let closeButton = document.createElement('button');
   closeButton.classList.add('close-button');
   closeButton.innerText = 'Close'
   closeButton.addEventListener('click', hideModal);

   // creating title and content element
   let titleElement = document.createElement('h1');
   titleElement.classList.add('title-element');
   titleElement.innerText = pokemon.name;

   let contentElement = document.createElement('p');
   contentElement.classList.add('content-element');
   
  
   contentElement.innerText = `Height:${pokemon.height}   Weight:${pokemon.weight} `;

   // creating image element
   let imageElement = document.createElement('img');
   imageElement.classList.add('image-element')
   imageElement.src = pokemon.imageUrl

   modal.appendChild(closeButton);
   modal.appendChild(titleElement);
   modal.appendChild(contentElement);
   modal.appendChild(imageElement);
   modalContainer.appendChild(modal);

   modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });


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

