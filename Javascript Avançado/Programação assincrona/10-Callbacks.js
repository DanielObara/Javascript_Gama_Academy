
// botao.addEventListener('click', function () {
// 	console.log('estou dentro de uma função callback!');
// });

function primeiraFunction() {
	// Aguardar o prato ficar pronto (5s)
	setTimeout(()=>{
		console.log("Seu prato ficou pronto!")
	}, 5000)
}

function segundaFunction() {
	console.log("Vou fazer outra coisa");	
}

primeiraFunction();
segundaFunction();

function executaAtividadesEmOrdem(mensagem, callback){
	console.log(mensagem)
	callback();
}
executaAtividadesEmOrdem("Essa é a primeira mensagem", function () {
	console.log('Essa é a segunda mensagem')
})
