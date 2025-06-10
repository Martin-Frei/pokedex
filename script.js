let box = document.getElementById("bigBox");
let cardInBox = document.getElementById("bigCard");
let offset = 1;
let limit = 30;
let loading = false;

async function fetchPokemon(id) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await response.json();
  } catch {
    return null;
  }
}

async function dataArray() {
  loading = true;
  let data = [];
  for (let i = offset; i < offset + limit; i++) {
    data.push(fetchPokemon(i));
  }
  let results = await Promise.all(data);
  results.forEach((p) => smallCardTemplate(p));
  offset += limit
}

function smallCardTemplate(p) {
  let cardDiv = document.createElement("div");
  let type = p.types[0].type.name;
  cardDiv.innerHTML = `
        <div class="smallImg">
        <h2>${p.id} ${p.name}</h2>   
        <h2>Experience: ${p.base_experience} <img src="${p.sprites.front_default}" alt="${p.name}"></h2> 
        </div>
    `;
  cardInBox.appendChild(cardDiv);
}

dataArray();
