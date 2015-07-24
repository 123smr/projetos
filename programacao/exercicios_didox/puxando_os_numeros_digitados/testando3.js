mensagem=function(mensagem){
	document.write(mensagem+"<br>");
}
mensagemSemBR=function(mensagem){
	document.write(mensagem);
}
var numero=1;
var digitos=[];

var repete=function(){
	if(numero>5){
		return;

	}
	else{
		digitos.push(parseInt(prompt("Digite o "+numero+" numero")));
		numero++;
		repete();
	}
}
repete();
mensagem("Os numeros digitados foram:");

var total=0;
var digitou=0;
var resultado=function(){
	
	if(digitou>4){
		return;
	}
	else{
		soma=(digitou<4?"+":" = ");
		total=total+digitos[digitou];
		mensagemSemBR(digitos[digitou]+soma);
		digitou++
		resultado();
	}
}
resultado();
mensagemSemBR(total);
