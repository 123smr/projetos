function Cliente(id,nome,endereco,telefone){
	//atributos publicos//
	this.nome=nome;
	this.endereco=endereco;
	this.telefone=telefone;
	this.id=id;

	//metodos publicos//
	this.salvar=function(){
		Cliente.bancoEstatico.push(this);
	}
	this.alterar=function(){
		var indice=indicePorID(this.id);
		CLiente.bancoEstatico[indice]=this;
	}
	this.excluir=function(){
		var cliente=buscaClientePorID(this.id);
		Cliente.bancoEstatico.pop(cliente);
	}
	this.listar=function(){
		console.log(Cliente.bancoEstatico);
	}
	this.buscaClientePorID=function(id){
		return Cliente.buscaClientePorID(id);
	}
}
//atributos estaticos//
Cliente.bancoEstatico=[];

//metodos estaticos//
Cliente.salvar=function(cliente){
	Cliente.bancoEstatico.push(cliente);
}
Cliente.listar=function(){
	console.log(Cliente.bancoEstatico)
}
Cliente.buscaPorId=function(id){
	var indice = Cliente.indicePorID(id);
	return Cliente.bancoEstatico[indice] 
}

Cliente.indicePorID=function(id){
	var indice;
	for(i=0;i<Cliente.bancoEstatico.length;i++){
		if(Cliente.bancoEstatico[i].id==id){
			indice=i;
			break;
		}
	}
	return indice
}



