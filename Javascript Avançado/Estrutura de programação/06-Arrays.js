// Criando um array
var meuArray = ["daniel", "alexa", "google", "amazon", "javascript"];

// Acessando uma posição específica do array
console.log("🚀 ~ file: 06-Arrays.js ~ line 2 ~ meuArray", meuArray[0])
console.log("🚀 ~ file: 06-Arrays.js ~ line 2 ~ meuArray", meuArray.length)

// Percorre cada item do array e executa uma função
const novoArray = meuArray.map((posicao) => {
	console.log("🚀 ~ file: 06-Arrays.js ~ line 7 ~ meuArray.map ~ item", posicao)
	if (posicao === 'daniel') {
		return "Elon Musk"
	}
	return posicao
})

console.log("🚀 ~ file: 06-Arrays.js ~ line 9 ~ novoArray ~ novoArray", novoArray)

// Estrutura de repetição
for (let index = 0; index < meuArray.length; index++) {
	meuArray[index];
	console.log("🚀 ~ file: 06-Arrays.js ~ line 15 ~ array[index]", meuArray[index])
}

// Juntando o array e transformando em uma string
var testeJoin = meuArray.join();
console.log("🚀 ~ file: 06-Arrays.js ~ line 26 ~ testeJoin", testeJoin)

// Juntando o array e transformando em uma string separada por espaço
var testeJoinComEspaco = meuArray.join(" ");
console.log("🚀 ~ file: 06-Arrays.js ~ line 26 ~ testeJoin", testeJoinComEspaco)

// Verificar se o array possui determinado valor.
console.log("🚀 ~ file: 06-Arrays.js,", meuArray.includes("javascript"))

let arrayDeNumeros = []

function teste() {
	console.log("🚀 ~ file: 06-Arrays.js ~ line 37 ~ arrayDeNumeros", arrayDeNumeros)
	return arrayDeNumeros
}

teste()

arrayDeNumeros.push(1)
console.log("🚀 ~ file: 06-Arrays.js ~ line 45 ~ arrayDeNumeros", arrayDeNumeros)

arrayDeNumeros.push(2)
console.log("🚀 ~ file: 06-Arrays.js ~ line 48 ~ arrayDeNumeros", arrayDeNumeros)

arrayDeNumeros = [...arrayDeNumeros, 3, 4, 5]
console.log("🚀 ~ file: 06-Arrays.js ~ line 51 ~ arrayDeNumeros", arrayDeNumeros)

let soma = 0;
for (let index = 0; index < arrayDeNumeros.length; index++) {
	soma += arrayDeNumeros[index];
	console.log("🚀 ~ file: 06-Arrays.js ~ line 56 ~ soma", soma)
}

// let soma2 = 0;
// arrayDeNumeros.map(item => {
// 	soma2 += item;
// 	console.log("🚀 ~ file: 06-Arrays.js ~ line 63 ~ soma2", soma2)
// })


// function somaTudoAeV2(previousValue, currentValue) {
// 	return previousValue + currentValue;
// }

// const resultadoComFunction = arrayDeNumeros.reduce(somaTudoAeV2);
// console.log("🚀 ~ file: 06-Arrays.js ~ line 73 ~ resultadoComFunction", resultadoComFunction)

// const resultadoReduce = arrayDeNumeros.reduce((accumulator, current) => {
// 	return accumulator + current
// });
// console.log("🚀 ~ file: 06-Arrays.js ~ line 78 ~ resultadoReduce ~ resultadoReduce", resultadoReduce)

// const somaTudoAe = (previousValue, currentValue) => previousValue + currentValue;
// const resultadoComArrowFunction = arrayDeNumeros.reduce(somaTudoAe);
// console.log("🚀 ~ file: 06-Arrays.js ~ line 68 ~ resultado", resultadoComArrowFunction)


// console.log(meuArray.reverse());

// meuArray.forEach(nomes => {
// 	console.log("🚀 ~ file: 06-Arrays.js ~ line 87 ~ nomes", nomes)
// });

// // Rest ...
// // A sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido de argumentos como um array.
// let [pos1, pos2, pos3, pos4, ...rest] = meuArray;
// console.log("🚀 ~ file: 06-Arrays.js ~ line 91 ~ meDaOResto", rest)
// console.log("🚀 ~ file: 06-Arrays.js ~ line 91 ~ pos4", pos4)
// console.log("🚀 ~ file: 06-Arrays.js ~ line 91 ~ pos3", pos3)
// console.log("🚀 ~ file: 06-Arrays.js ~ line 91 ~ pos2", pos2)
// console.log("🚀 ~ file: 06-Arrays.js ~ line 91 ~ pos1", pos1)

// // Desestruturação
// var [y, z] = meuArray;
// console.log("🚀 ~ file: 06-Arrays.js ~ line 90 ~ y", y)
// console.log("🚀 ~ file: 06-Arrays.js ~ line 91 ~ z", z)

const expTrycatch = (arr) => {
	arr.map(item => {
		console.log("item: ", item);
	})
}

try {
	expTrycatch("teste")
} catch (error) {
	if (error.message === 'arr.map is not a function'){
		console.log("Me desculpe, infelizmente parece que você não tem acesso ao conteúdo");
	}
	console.log("🚀 ~ file: 06-Arrays.js ~ line 113 ~ error", error)
}