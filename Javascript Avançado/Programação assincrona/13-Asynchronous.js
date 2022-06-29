/**
 * Promise é um objeto usado para processamento assíncrono.
 * Um Promise(de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
*/

let entregaPizza = new Promise((resolvida, rejeitada) => {
	let entregou = false
	let talvez = false
	if (entregou) {
		resolvida('Pizza')
	} else if (talvez) {
		resolvida('Comeu metade')
	}
		// Vai fazer outro pedido.....
		rejeitada('Sem pizza')
})

// pending(pendente): Estado inicial, que não foi realizada nem rejeitada.
entregaPizza
	// fulfilled(realizada): sucesso na operação ou falha na operação.
	.then((mensagem) => {
		console.log('Mensagem dentro do then', mensagem);
	})
	.catch((erro) => {
		console.log('Mensagem dentro do catch', erro);
	})

	// rejected(rejeitado): deu ruim