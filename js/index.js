var calculadora = {

//BOTONES Y SUS FUNCIONES
init : (function(){
	this.btnFunctions();
}), 

//ASIGNANDO BOTONES Y FUNCIONES
btnFunctions : function(){
//EFECTO BOTON
  var btns = document.getElementsByClassName("tecla");
  for(i=0; i<btns.length;i++){btns[i].setAttribute("onmousedown","ClickDown(this)");
  	btns[i].setAttribute("onmouseup","ClickUp(this)");	
  	} 
//NOMBRANDO BOTONES
	var pantalla = document.getElementById("display");
	var n1 = document.getElementById("1");
	var n2 = document.getElementById("2");
	var n3 = document.getElementById("3");
	var n4 = document.getElementById("4");
	var n5 = document.getElementById("5");
	var n6 = document.getElementById("6");
	var n7 = document.getElementById("7");
	var n8 = document.getElementById("8");
	var n9 = document.getElementById("9");
	var n0 = document.getElementById("0");
	var onbtn = document.getElementById("on");
	var pnt = document.getElementById("punto");
	var sumar = document.getElementById("mas");
	var restar = document.getElementById("menos");
	var multiplicar = document.getElementById("por");
	var dividir = document.getElementById("dividido");
	var resultbtn = document.getElementById("igual");
	var signo = document.getElementById("sign");	


},
};
calculadora.init(); ///INICIALIZANDO LAS FUNCIONES DE LA CALCULADORA

//EFECTO BOTON APLICADOS A LOS ELEMENTOS DEL DOM
function ClickDown(obj) {
		obj.style = "padding: 1px; -webkit-transition-duration: 0.1s;-moz-transition-duration: 0.1s; -o-transition-duration: 0.1s;transition-duration: 0.1s;";  
}
function ClickUp(obj) {
 		obj.style = "padding: 0px;";	 		
}  