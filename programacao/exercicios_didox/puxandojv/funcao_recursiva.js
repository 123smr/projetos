var exit=0;
var andar=function(){
	mostra(exit)
	if(exit==10){
		return
	}
	exit++
	andar();
}