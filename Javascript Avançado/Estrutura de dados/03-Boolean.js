console.log(typeof true); 
console.log(typeof false);
var maiorOuMenor = 3<4
console.log("🚀 ~ file: 03-Boolean.js ~ line 4 ~ maiorOuMenor", maiorOuMenor)
console.log(typeof maiorOuMenor);
var nome = 'daniel';
// Identico (verifica não apenas o valor mas também o tipo)
console.log(nome.length === '6');
// Verifica apenas o valor e não o tipo
var igual = 5 == 5;
console.log("🚀 ~ file: 03-Boolean.js ~ line 14 ~ igual", igual)
var maiorOuIgual = 5>=5;
console.log("🚀 ~ file: 03-Boolean.js ~ line 9 ~ maiorOuIgual", maiorOuIgual)
var menorOuIgual = 5<=1;
console.log("🚀 ~ file: 03-Boolean.js ~ line 10 ~ menorOuIgual", menorOuIgual)
var diferente = 5 != 10;
console.log("🚀 ~ file: 03-Boolean.js ~ line 13 ~ diferente", diferente)

/**
 * Operadores Lógicos
 */

// AND lógico (&&)
var maiorDeIdade = 18>=18; // True
var temDocumento = true; // True

console.log(maiorDeIdade && temDocumento);

// OU lógico (||)
var maiorDeIdade = 17 >= 18; // False
var emancipado = true; // True

console.log(maiorDeIdade || emancipado);

// NOT lógico(!)
var verdadeiro = true;
var falso = false;
console.log("O que era verdadeiro virou: ",!verdadeiro);
console.log("O que era falso virou: ", !falso);

var a1 = true && true;     // t && t retorna true
var a2 = true && false;    // t && f retorna false
var a3 = false && true;     // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "Gato" && "Cão";   // t && t retorna Cão
var a6 = false && "Gato";   // f && t retorna false
var a7 = "Gato" && false;   // t && f retorna false

var o1 = true || true;     // t || t retorna true
var o2 = false || true;     // f || t retorna true
var o3 = true || false;    // t || f retorna true
var o4 = false || (3 == 4); // f || f retorna false
var o5 = "Gato" || "Cão";   // t || t retorna Gato
var o6 = false || "Gato";   // f || t retorna Gato
var o7 = "Gato" || false;   // t || f retorna Gato

var n1 = !true;   // !t retorna false
var n2 = !false;  // !f retorna true
var n3 = !"Gato"; // !t retorna false

// Operador ternário
var idade = 19;
var resposta = (idade >= 18) ? "adulto" : "menor de idade";
console.log("🚀 ~ file: 03-Boolean.js ~ line 64 ~ resposta", resposta)

var condicao = "Papai"
var resultado = (condicao === "Mamãe") ? "É mamãe" : "Não mamãe"
console.log("🚀 ~ file: 03-Boolean.js ~ line 68 ~ resultado", resultado)
console.log(false ? "Verdadeiro" : "Falso");
console.log(10 <= 10 ? "É menor ou igual" : "É maior");

