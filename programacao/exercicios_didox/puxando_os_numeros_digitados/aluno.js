Aluno=function(nome,nota){
	//atributos publicos//
	this.nome=nome;
	this.nota=nota;

	//metodos publicos
	this.salvar=function(){
		Aluno.bancoEstatico.push(this)
	}

}
//atributo estatico//
Aluno.bancoEstatico=[]

//metodos estaticos//
Aluno.mediaAlunos=function(media){
	var soma=0;
	for(i=0;i<Aluno.bancoEstatico.length;i++){
		soma+=parseInt(Aluno.bancoEstatico[i].nota);
	}
	media=soma/Aluno.bancoEstatico.length;
	return media;
}
Aluno.lista=function(){
	return Aluno.bancoEstatico;
}