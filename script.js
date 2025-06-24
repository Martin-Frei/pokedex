let model = document.getElementById("model");
let cardInBox = document.getElementById("bigCard");
let offset = 1;
let limit = 30;
let loading = false;
let types = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
};



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
  offset += limit;
}

function smallCardTemplate(p) {
  let cardDiv = document.createElement("div");
  let type = p.types[0].type.name;
  cardDiv.style.background = types[type] || "grey"
  cardDiv.innerHTML = `
        <div class="smallImg">
        <h2>${p.id} ${p.name}</h2>   
        <h2>Experience: ${p.base_experience} <img src="${p.sprites.front_default}" alt="${p.name}"></h2> 
        <h3>${p.height}</h3>
        </div>
    `;
  cardInBox.appendChild(cardDiv);
  cardDiv.addEventListener("click",() => bigModel(p.id))
  console.log("smallTemplate working")
}

dataArray();

async function bigModel(id){
  let p = await fetchPokemon(id);
  let typePokemon = p.types[0].type.name;
  console.log(p)
  model.innerHTML =`
     <div class="modelContent">
        <h3>Test inner HTML</h3>
        <h2>${p.id} ${p.name}</h2>   
        <h2>Experience: ${p.base_experience} <img src="${p.sprites.front_default}" alt="${p.name}"></h2> 
        </div>
  ` 
  model.classList.remove('hidden')
 
  console.log("bigModel working")
}
model.addEventListener('click', ()=> {model.classList.add('hidden')})
