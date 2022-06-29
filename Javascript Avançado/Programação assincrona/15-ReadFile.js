import fs from "fs/promises";

const editaArquivo = async (numero1, numero2, resultado) => {
	try {
		const conteudo = await fs.readFile("./arquivo.txt", 'utf8');

		console.log('\nConteúdo do arquivo antes de fazer o append:', conteudo);

		await fs.appendFile("./arquivo.txt", `\n${numero1} + ${numero2} = ${resultado}`)

		const conteudoApos = await fs.readFile("./arquivo.txt", 'utf8');
		console.log('\nConteúdo do arquivo depois de fazer o append:', conteudoApos);

	} catch (error) {
		console.log("Deu ruim");
	}
};


function soma(numero1, numero2) {
	return new Promise((resolvida, rejeitada) => {
		if (isNaN(numero1) || isNaN(numero2)) {
			rejeitada("Não são números")
		} else {
			let resultado = numero1 + numero2
			editaArquivo(numero1, numero2, resultado);
			resolvida(resultado)
		}
	})
}

soma(5, 10)
.then((result) => {
	console.log("🚀 ~ file: 15-ReadFile.js ~ line 33 ~ soma ~ result", result)
}).catch((err) => {
	console.log("🚀 ~ file: 15-ReadFile.js ~ line 36 ~ soma ~ err", err)
});