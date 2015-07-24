function Carro(){
	//atributos publicos//
	this.pneus=4;
	this.marca="Modelo indefinido";
	this.volante=1;
	this.modelo="Modelo indefinido";
	this.ano=2000;
	//metodos publicos//
	this.andar=function(){
		alert("estou andando com "+this.pneus+" pneus e "+this.volante+" volante do modelo "+this.modelo+" da marca "+this.marca+" do ano "+this.ano)
	}

	this.navegar=function(){
		alert(motor);
		preencherMotor()
		alert(motor);
	}



	//atributos privados//
	var motor;
	//metodos privados//
	var preencherMotor=function(){
		motor="Rocan";
	}
}
var c=new Carro();
