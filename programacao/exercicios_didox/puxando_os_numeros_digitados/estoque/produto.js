Produto=function(){
	//atributos publicos//
	this.codigo;
	this.nome;
	this.quantidade;

	//metodos publicos//
	this.salvar=function(){
		Produto.bancoProduto.push(this);
	}
	
	this.diminuirQuantidadeProduto=function(qtd){
			this.quantidade-=qtd;
	}
	this.atualizar=function(){
		for(i=0;i<Produto.bancoProduto.length;i++){
			if(this.codigo==Produto.bancoProduto[i].codigo){
				Produto.bancoProduto[i]=this;
				return
			}
		}
	}



}


//atributos estaticos//
Produto.bancoProduto=[];

//metodos estaticos//
Produto.buscaProdutoPorCodigo=function(codigo){
	for(i=0;i<Produto.bancoProduto.length;i++){
		if(codigo==Produto.bancoProduto[i].codigo){
			return Produto.bancoProduto[i];
		}
	}
}

