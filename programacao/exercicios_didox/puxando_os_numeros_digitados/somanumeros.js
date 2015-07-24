var contador=1;
var numeros=[];

while(contador<=5){
	var numero=prompt("Digite o "+contador+" numero");
	numeros.push(numero);
	contador++;
}
mensagem("Os números digitados foram: ");

var total=0;
for(i=0;i<5;i++){
	total+=parseInt(numeros[i]);
	var soma=(i<4?"+":" = ");
	mensagemSemBr(numeros[i]+soma);
}
mensagem(total);
