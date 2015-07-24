function Funcoes(){
	this.vetor10Numeros=[4,7,5,8,2,15,9,6,10,11];
	this.vetor5Numeros=[3,4,5,8,2];
	this.divisoresNumeroImpar=[];
	this.somaNumeroPar=[];
	this.mensagem=function(mensagem){
		document.write(mensagem+" , ");
	}
	this.repete=function(i){
		if(i>9){
			return;
		}
		else if(this.vetor10Numeros[i]%2==1){
			var soma=0;
			var quantidadeDivisores=0;
			while(soma<this.vetor5Numeros.length){
				if(this.vetor10Numeros[i]%this.vetor5Numeros[soma]==0){
					quantidadeDivisores++
				}
				soma++;
			}
			this.divisoresNumeroImpar.push(quantidadeDivisores);
			this.repete(i+1);

		}
		else{
			var soma=0;
			var valorDeSoma=0

			while(soma<this.vetor5Numeros.length){
				valorDeSoma=this.vetor10Numeros[i]+this.vetor5Numeros[soma];
				soma++;
			}
			this.somaNumeroPar.push(valorDeSoma);
			this.repete(i+1);
		}
	}
	this.executar=function(){
		this.somaNumeroPar=[];
		this.divisoresNumeroImpar=[];
		this.repete(0)
		this.mensagem("Os divisores impares sao: ");
		for(i=0;i<this.divisoresNumeroImpar.length;i++){
			this.mensagem(this.divisoresNumeroImpar[i]);
		}
		document.write("<br>")
		this.mensagem("Os numeros pares somados sao "+this.somaNumeroPar.join(", "));
		document.write("<br>")
		
	}
}