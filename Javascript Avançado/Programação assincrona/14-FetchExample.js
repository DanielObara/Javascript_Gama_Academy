// import fetch from "node-fetch";
const ul = document.getElementById('pokemons')
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

fetch(url)
	.then((resposta) => resposta.json())
	.then((data) => {
		console.table(data.results);
		return data.results.map(pokemon => {
			let li = document.createElement('li');

			let a = document.createElement('a');
			a.href = pokemon.url
			a.innerText = `${pokemon.name}`

			li.appendChild(a)
			ul.appendChild(li)
		})
	})
	.catch((erro) => {
		console.log(erro);
	})