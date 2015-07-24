Cachorro=function(orelha,olhos,patas){
	//atributos publicos//
	this.orelha=orelha;
	this.olhos=olhos;
	this.patas=patas;

	//atributos privados//
	var quantidadeDePatas;


	//metodos privados//
	var calculoPatas=function(){
		quantidadeDePatas=this.patas;
		var calculo=quantidadeDePatas*4;
		return calculo;
	}	

	
	//metodos publicos//
	this.quantasPatas=function(){
		alert("A quantidade de patas e: "+calculoPatas());
	}
	this.latir=function(){
		alert("Au...");
	}
	this.correr=function(){
		alert("Estou correndo...");
	}
	this.comer=function(){
		alert("Estou comendo");
	}
}

//metodos estaticos//
Cachorro.fazerCoco=function(){
	alert("Todos os cachorros fazem coco");
}




