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
    let list = document.querySelector(".list-group");
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item")
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add('btn','btn-secondary','btn-pokemon','btn-lg', 'search-button');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');
    listItem.appendChild(button);
    list.appendChild(listItem);
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
  function showModal(pokemon) {
  
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title')
 
    
    let nameElement = $('<h2>' + pokemon.name + '</h2>');
    let heightElement = $('<p>' + "Height:" + pokemon.height + '</p>');
    let weightElement = $('<p>' + "Weight:" + pokemon.weight + '</p>');
    let imageElement = $ ('<img class=\'pokemon-modal-image\'>');
    imageElement.attr ("src", pokemon.imageUrl);
    let imageElementBack = $ ('<img class=\'pokemon-modal-image\'>');
    imageElementBack.attr ("src", pokemon.imageUrlBack);
    
 
    let secondElement = document.createElement('p');
    pokemon.types.forEach((type, index) => {
      if (index === pokemon.types.length - 1) {
        secondElement.innerText += 'types:'+ type.type.name;
      } else {
        secondElement.innerText += 'types:' + type.type.name + ", ";
      }
    })
    modalTitle.empty();
    modalBody.empty();
 
    modalTitle.append(nameElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(secondElement);
    modalBody.append(imageElement);
    modalBody.append(imageElementBack);
    }
  $(document).ready(function(){
    $('#pokemon-input').on('keyup', function() {
    let value = $(this).val().toLowerCase();
    $(".search-button").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    });
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

