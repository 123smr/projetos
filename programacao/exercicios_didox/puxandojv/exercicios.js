

var mostra=function(mensagem){
	document.write(mensagem+"<br>");
}
var leia=function(leia){
	return prompt(leia);
}
var exercicios={
	maiorNumero: function(){ 
		var a=parseInt(leia("Digite um valor"));
		var b=parseInt(leia("Digite outro valor"));
		if(a>b){
			alert(a);
		}	
		else if(a<b){
			alert(b);
		}
	},

	vendedores: function(){
		var vendasTotal=[];
		var percentualTotal=[];
		var nomesTotal=[];
		var vendasMaisComissao=[];
		var somatoria=0;
		var maiorValorAReceber=0;
		var menorValorAReceber=9999999999;
		var vendedorCampeao="";
		var vndedorLixo="";

		for(i=0;i<3;i++){
			var vendas=parseFloat(leia("Digite o total de vendas: "));
			vendasTotal.push(vendas);
			var percentual=parseInt(leia("Digite o percentual de comissao: "));
			percentualTotal.push(percentual);
			var nome=leia("Digite o nome do vendedor: ");
			nomesTotal.push(nome);

			var somaComComissao=((vendas*percentual)/100)+vendas;
			vendasMaisComissao.push(somaComComissao);
			
			somatoria=somatoria+vendas;

			if(maiorValorAReceber<=somaComComissao){
				maiorValorAReceber=somaComComissao;
				vendedorCampeao=nome;
			}
			if(menorValorAReceber>=somaComComissao){
				menorValorAReceber=somaComComissao;
				vndedorLixo=nome;
			}
		}

		for(i=0;i<nomesTotal.length;i++){
			mostra("Nome do vendedor: "+nomesTotal[i]+" — Valor a receber: "+vendasMaisComissao[i]);
		}
		mostra("O total de vendas de todos os vendedores e de: "+somatoria);

		mostra("O maior valor a receber é: "+maiorValorAReceber+" pelo(a) vendedor(a): "+vendedorCampeao);
		mostra("O menor valor a receber é: "+menorValorAReceber+" pelo(a) vendedor(a): "+vndedorLixo);
	},

	acharNumero30: function(){
		var numeros=[30,2,3,67,14,30,78,12,30,87,2,56,30,30,1];
		for(i=0;i<numeros.length;i++){
			if(numeros[i]==30){
				mostra(i);
				
			}	
		}
	},

	numerosPareseImpares: function(){
		var quantidadePares=0;
		var quantidadeImpares=0;
		var numerosPares=[];
		var numerosImpares=[];

		for(i=0;i<6;i++){
			numeros=parseInt(leia("Digite valor"));
			resto_divisao=numeros%2;
			if(resto_divisao==0){
				quantidadePares++;
				numerosPares.push(numeros);

			}

			else if(resto_divisao!=0){
				quantidadeImpares++;
				numerosImpares.push(numeros);
			}


		}
		mostra("A quantidade de números pares é de: "+quantidadePares);
		mostra("Os numeros pares são: <br>");
		for(i=0;i<numerosPares.length;i++){
			mostra(numerosPares[i]);
		}

		mostra("A quantidade de números impares é de: "+quantidadeImpares);
		mostra("Os numeros impares são: <br>");
		for(i=0;i<numerosImpares.length;i++){
			mostra(numerosImpares[i]);
		}
	},
	whileexercicio: function(){
		var a=2;
		while(a<=8){
			if(a>=5 && a<=8){
				alert(a);
			}a=a+1
		}	

	},
	arrays: function(){
		var inferior50=0;
		var entre50e100=[];
		var quantidade=0;
		var valorTotal=0;
		for(i=0;i<2;i++){
			nome=leia("Digite o nome do produto: ");
			valor=parseFloat(leia("Digite o valor do produto"));

			if(valor<50){
				inferior50++
			}
			if(valor>=50 && valor<=100){
				entre50e100.push(nome);
			}
			if(valor>100){
				quantidade++;
				valorTotal=valorTotal+valor;	
			}
		}
		var media=valorTotal/quantidade

		mostra("A quantidade de produtos com preço inferior a 50 é= "+inferior50);

		mostra("O nome dos produtos com preçø entre 50 e 100 sao: <");
		for(i=0;i<entre50e100.length;i++){
			mostra(entre50e100[i]+"<br>");
		}
		mostra("A media dos precos dos produtos com valor +100 e: "+media);
	},

	mediaAlunos: function(){
		nomes=[];
		medias=[];
		while(1==1){
			alert("Este e o programa para mostrar a media dos alunos.\n Para continuar, digite 1, para sair digite 0.");
			a=parseInt(leia());
			if(a==0) break;
			else{
				alert("Digite o nome do aluno: ");
				nome=leia();
				alert("Digite a nota 1 do aluno "+nome);
				nota1=parseInt(leia());
				alert("Digite a nota 2 do aluno "+nome);
				nota2=parseInt(leia());
				media=(nota1+nota2)/2;
				nomes.push(nome);
				medias.push(media)
			}	
		}
		for(i=0;i<nomes.length;i++){
			mostra("aluno: "+nomes[i]+" media :"+medias[i]);
		}

	},
	pulaNumeroImpar: function(){
		var a=parseInt(prompt("digite um número"));

		for(i=0; i<=a; i++){
			resto_divisao=i%2;
			if(resto_divisao==0)continue; 
			mostra(i);
		}
	},
	mediaIdades: function(){
		var adriano=26
		var paulo=32
		var suzana=25 
		var marcela=28

		var media=(26+32+25+28)/4

		mostra(media)
	},

	investimento: function(){
		alert("Digite 1 para POUPANÇA 2 para RENDA FIXA");
		var tipo=prompt();
		var tipo=parseInt(tipo);

		alert("Digite o valor do investimento: R$ ");
		var valor=leia();
		valor=parseInt(valor);
		if(tipo ==1){
			var poupanca=(valor*3)/100;
			poupanca=valor+poupanca;
			alert("Seu rendimento em POUPANÇA foi de: R$ "+poupanca)
		}
		else if(tipo ==2){
			var fixa=(valor*4)/100;
			fixa=fixa+valor;
			alert("Seu rendimento em RENDA FIXA foi de: R$ "+fixa)
		}
	},
	calculaTabuada: function(numero){
		while(numero<=10){
			document.write("A tabuada de "+numero+":")
			document.write("<br>")
			
			var multiplo=1;
			while(multiplo<=10){
				var tabuada=numero*multiplo;
				document.write(numero+"X"+multiplo+"="+tabuada);
				document.write("<br>");
				multiplo=multiplo+1;
			}
			numero=numero+1;
		}
	},
	maiorNumero: function(a,b){
		if(a>b){
			alert(a);
		}	
		else if(a<b){
			alert(b);
		}
	},

	programaMedia: function(){
		a=0;
		while(a==0){
			alert("Bem vindo ao programa da média.");
			alert("Digite sua nota: ");
			var nota1=prompt();
			nota1=parseInt(nota1);
			alert("Digite sua outra nota: ");
			var nota2=prompt();
			nota2=parseInt(nota2);
			var media=(nota1+nota2)/2;
			if(media <=4){
				alert("Reprovado. Sua média foi: "+media);
			}
			else if(media >4 && media <=7){
				alert("Exame. Sua méfia foi: "+media);
			}
			else if(media >7 && media <=10){
				alert("Aprovado. Sua média foi: "+media);
			}
			
			alert("Digite\n 1 para sair \n 0 para continuar");
			a=prompt();
			a=parseInt(a);	
		}
	},
}
