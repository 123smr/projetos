mensagem=function(mensagem){
	document.write(mensagem);
}
var contador=0;
numeros=[];
while(contador<5){
	var numero=parseInt(prompt("Digite o "+contador+" numero:"));
	numeros.push(numero);
	contador++;
}
mensagem("Os numeros digitados foram: <br>");

var total=0;
for(i=0;i<5;i++){
	var soma=(i<4?"+":" = ");
	total=total+numeros[i];
	mensagem(numeros[i]+soma);
}
mensagem(total);