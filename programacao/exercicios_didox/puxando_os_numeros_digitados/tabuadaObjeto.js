function Tabuada(){
	this.numero;
	this.executar=function(){
		s = ""
		for(i=1;i<11;i++){
		  s += this.numero + " x " + i + " = " + (this.numero*i) + "\n"
		}
		alert(s);
	}
}
