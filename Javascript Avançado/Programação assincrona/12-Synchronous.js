// Callback: Uma função callback é uma função passada a outra função como argumento,
// que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
// Saiba mais aqui https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function

// O exemplo abaixo é de uma synchronous callback, uma vez que é executada imediatamente.
function sumNumbers() {
	let result = 1 + 1;
	// Verifica se o resultado da soma é 2
	if (result == 2) {
		// Se for, ele chama uma outra função successCallback
		successCallback()
	} else {
		// Se não for, ele chama uma outra função errorCallback
		errorCallback()
	}
}

// Declaração da função de sucesso
function successCallback() {
	console.log('Opa deu certo!');
}

// Declaração da função de falha
function errorCallback() {
	console.log('Opa deu ruim!');
}

// Executando a função
sumNumbers();