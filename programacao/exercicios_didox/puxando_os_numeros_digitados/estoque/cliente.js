Cliente=function(nome,produto){
	//atributos publicos//
	this.nome=nome;
	this.produto=produto;

	//metodos publicos//
	this.salvar=function(){
		Cliente.bancoCliente.push(this);
	}
}
//atributos estaticos//
Cliente.bancoCliente=[];

//metodos estaticos//


		

	