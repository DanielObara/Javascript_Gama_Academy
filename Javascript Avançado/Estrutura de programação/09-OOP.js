function Animal(patas) {
	this.patas = patas;
}

// Criando um metodo da clase Animal
Animal.prototype.respirar = function respirar() {
	console.log("Esse animal está respirando");
}

function Cachorro(patas) {
	Animal.call(this, patas)
}
// Cachorro herda de animal
Cachorro.prototype = Object.create(Animal.prototype)
Cachorro.prototype.constructor = Cachorro
Cachorro.prototype.latir = function () {
	console.log("Cachorro está latindo");
}

let cachorro = new Cachorro(4);
cachorro.respirar();
cachorro.latir();

class Animal {
	constructor(patas) {
		this.patas = patas;
	}

	respirar() {
		console.log("Esse animal está respirando");
	}
}

// Herdando Utilizando ES6
class Cachorro extends Animal{
	constructor(patas){
		super(patas)
	}
	
	respirar(){
		super.respirar();
		console.log("Respirando da forma que um cachorro respira");
	}
	
	latir() {
		console.log("Cachorro está latindo");	
	}
}

var cachorro1 = new Cachorro(4);
cachorro1.latir();
cachorro1.respirar();

