var valorVista=0;
var somaVista=0;
var valorPrazo=0;
var somaPrazo=0;
var primeiraParcela=0;
mensagem=function(mensagem){
	document.write(mensagem);
}
contas=function(i){
		if(i>14){
			return;
		}
		else{
			var codigo=parseInt(prompt("Indique o codigo:\n1.V para transacao a vista ou\n2.P para transação a prazo."));

			if(codigo==1){
				valorVista=parseFloat(prompt("Digite o valor:"));
				somaVista=somaVista+valorVista;
			}
			else{
				valorPrazo=parseFloat(prompt("Digite o valor:"));
				somaPrazo=somaPrazo+valorPrazo;
				prestacao=valorPrazo/3;
				primeiraParcela=primeiraParcela+prestacao;
			}
			contas(i+1)
		}
}
contas(0);
mensagem("O valor total das compras a vista: "+somaVista+"<br>");
mensagem("O valor total das compras a prazo: "+somaPrazo+"<br>");
var total=somaVista+somaPrazo;
mensagem("O valor total das compras efetuadas: "+total+"<br>");
mensagem("O valor da primeira prestacao das compras sera de: "+primeiraParcela);