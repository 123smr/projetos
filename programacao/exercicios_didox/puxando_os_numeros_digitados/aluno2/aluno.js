
Aluno=function(aluno,nota1,nota2){
	//atributos publicos//
	this.aluno=aluno;
	this.nota1=parseInt(nota1);
	this.nota2=parseInt(nota2);

	//metodos publicos//
	this.salvar=function(){
		Aluno.bancoEstatico.push(this);
	}


	//metodos privados//
	this.media=function(){
		return parseFloat((this.nota1+this.nota2)/2);
	}
	this.situacao=function(){
		if(this.media()<5){
			return "Reprovado";
		}
		else if (this.media()>=5 && this.media()<7){
			return "Exame";
		}
		else{
			return "Aprovado";
		}
	}
}
//atributos estaticos
Aluno.bancoEstatico=[];

//metodos estaticos
Aluno.mediaClasse=function(){
	var soma=0;
	for(i=0;i<Aluno.bancoEstatico.length;i++){
		soma+=Aluno.bancoEstatico[i].media();
	}
	soma=soma/Aluno.bancoEstatico.length
	return soma;

}
Aluno.QuantidadeAprovados=function(){
	var totalAprovados=0;
	for(i=0;i<Aluno.bancoEstatico.length;i++){
		if(Aluno.bancoEstatico[i].situacao()=="Aprovado"){
			totalAprovados++
		}
	} 
	return totalAprovados
}
Aluno.QuantidadeExame=function(){
	var totalExame=0;
	for(i=0;i<Aluno.bancoEstatico.length;i++){
		if(Aluno.bancoEstatico[i].situacao()=="Exame"){
			totalExame++
		}
	} 
	return totalExame
}
Aluno.QuantidadeReprovados=function(){
	var totalReprovado=0;
	for(i=0;i<Aluno.bancoEstatico.length;i++){
		if(Aluno.bancoEstatico[i].situacao()=="Reprovado"){
			totalReprovado++
		}
	} 
	return totalReprovado
}

