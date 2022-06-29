// Criando um elemento
let umNovoParagrafo = document.createElement("p");
// Criando um novo texto
let textoNovo = document.createTextNode("Algum exemplazsdfgasdfgasdfgsa")
// Add um texto ao novo elemento
umNovoParagrafo.appendChild(textoNovo)

// Selecionando elementos aninhados
let paragrafoDeDentroDaDiv = document.querySelector("div div p")
// Selecionando elemento pai por ID com querySelector
let elementoPai = document.querySelector("#segundaDiv")
// Inseriu um novo paragrafo antes do outro paragrafo
elementoPai.insertBefore(umNovoParagrafo, paragrafoDeDentroDaDiv)

// // Criar um novo item na lista
// let umNovoItemDeLista = document.createElement("li");
// // Criar o texto 
// let textoDaLi = document.createTextNode("Feijão");
// // Add o texto no Item da lista
// umNovoItemDeLista.appendChild(textoDaLi);
// // Add o item da lista e seu texto na lista ordenada (ol)
// document.getElementById("minha-lista").appendChild(umNovoItemDeLista);

let novoItemLista = document.createElement("li");
let outroTexto = document.createTextNode("Arroz");

novoItemLista.appendChild(outroTexto);

let listItemBanana = document.getElementById("banana");
let pai = listItemBanana.parentNode;
// Add elemento com appendChild
pai.appendChild(novoItemLista)

let elementoP = document.getElementById("paragrafo");
let paiDoElementoP = elementoP.parentNode;

// Criando um elemento
let umSpan = document.createElement("span");
// Criando um novo texto
let textoNovoDoSpan = document.createTextNode("Nosso span")
// Add um texto ao novo elemento
umSpan.appendChild(textoNovoDoSpan)
// Substituindo um elemento filho por outro elemento
paiDoElementoP.replaceChild(umSpan, elementoP)

let nossoLink = document.querySelector("a");
console.log("HREF: ", nossoLink.href);
console.log("href com getAttribute", nossoLink.getAttribute('href') );

nossoLink.setAttribute("href","https://www.linkedin.com/in/danielobara/")

let primeiroh1 = document.getElementById('primeiroh1');

console.log("🚀 ~ LARGURA:", primeiroh1.clientWidth)
console.log("🚀 ~ ALTURA:", primeiroh1.clientHeight)

console.log("🚀 LARGURA: ", primeiroh1.offsetWidth)
console.log("🚀 ALTURA:", primeiroh1.offsetHeight)


// console.log("🚀 ~ file: index.js ~ line 53 ~ primeiroh1", primeiroh1.getBoundingClientRect())

setTimeout(() => {
	primeiroh1.style.color = 'green';
	primeiroh1.style.backgroundColor = 'black'
}, 2000);

// let todosElementosListitem = document.querySelectorAll('li')
// todosElementosListitem[4].style.color = 'red'