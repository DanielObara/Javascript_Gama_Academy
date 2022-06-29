const pessoa = {
	nome: "Daniel",
	idade: 29,
	jogos: ["Dota", "LoL", "CS", "Chess", "Axie", "Cryptomines"],
	peso: "1000kg",
	cars: {
		car1: "Ford",
		car2: "BMW",
		car3: "Fiat"
	}
}
console.log("🚀 ~ Jogo: ", pessoa.jogos[5])


pessoa.nome = "Kimera";
pessoa.jogos = [...pessoa.jogos, "Cryptocars"];
pessoa.idade = 20
delete pessoa.peso

pessoa.falar = function (texto = "Olá") {
	pessoa.nome = "Alexa"
	console.log(`${pessoa.nome} disse: ${texto}`)
}
console.log("🚀 ~ file: 08-Objetos.js ~ line 10 ~ pessoa", pessoa)
pessoa.falar("Vamos almoçar!")

const carro = {
	marca: "Hyundai",
	modelo: "Elantra",
	placa: "ASD-9999"
}

let { marca, modelo } = carro
console.log("🚀 ~ file: 08-Objetos.js ~ line 32 ~ marca, modelo", marca, modelo)

let { nome, idade } = pessoa;
console.log("🚀 ~ file: 08-Objetos.js ~ line 29 ~ nome, idade", nome, idade)


let objetoA = {
	nome: 'daniel'
}

objetoB = objetoA;

let objetoC = {
	nome: 'daniel'
}

console.log(objetoA == objetoB);
console.log(objetoA == objetoC);