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

onbtn.addEventListener("click",function reset () {
	onbtnclick = onbtn.innerHTML="0"; 
	pantalla.innerHTML = onbtnclick; //AL PRESIONAR, SE RESETEA EL VALOR,
	});
signo.addEventListener("click", function AlternateSign(){
	var actual = pantalla.innerHTML.slice(0,8); //HASTA UN MAXIMO DE 8 DIGITOS PREVIOS,		
	if(actual.includes("-")){
		var actual = pantalla.innerHTML.slice(0,9)
		pantalla.innerHTML= actual * -1;	//SI YA HAY UN SIGNO, NO AGREGARLO
	}else{
		pantalla.innerHTML = parseFloat(actual) * -1; //CONVIRTIENDO EL NUMERO A NEGATIVO Y VICEVERSA
	}
	});
pnt.addEventListener("click", function punto(){	
	actual = pantalla.innerHTML.slice(0,7); //HASTA UN MAXIMO DE 8 DIGITOS PREVIOS,
	pntAdded = pnt.innerHTML=".";
		if(actual.includes(".")){
			var actual = pantalla.innerHTML.slice(0,8)
				pantalla.innerHTML= actual;	//SI YA HAY UN PUNTO, NO AGREGARLO
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + pntAdded;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGARLO 	
		}else if(actual==""){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + "0" + pntAdded;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGARLO 	
		}else{
			var actual = pantalla.innerHTML.slice(0,7)
				pantalla.innerHTML = actual + pntAdded; //SI NO HAY UN PUNTO, AGREGARLO
		}
	});
n0.addEventListener("click", function numero0(){
	actual = pantalla.innerHTML.slice(0,7);	//HASTA UN MAXIMO DE 7 DIGITOS PREVIOS, 
	n0Added = n0.innerHTML="0";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n0Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (n0Added==actual){
				pantalla.innerHTML = n0Added; //SI EL VALOR ES 0, SOLO SE REEMPLAZA
		}else{
				pantalla.innerHTML = actual + n0Added; //SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}
	});
n1.addEventListener("click", function numero1(){
	actual = pantalla.innerHTML.slice(0,7);	//HASTA UN MAXIMO DE 7 DIGITOS PREVIOS, 
	n1Added = n1.innerHTML="1";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n1Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
				pantalla.innerHTML = actual + n1Added; //SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}else{
				pantalla.innerHTML = n1Added; //SI EL VALOR ES = 0, SOLO SE REEMPLAZA
		}	
	});
n2.addEventListener("click", function numero2(){	
	actual = pantalla.innerHTML.slice(0,7);  //HASTA UN MAXIMO DE 7 DIGITOS PREVIOS,
	n2Added = n2.innerHTML="2";
	
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n2Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
				pantalla.innerHTML = actual + n2Added;	//SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		} else{
				pantalla.innerHTML = n2Added;	//SI EL VALOR ES = 0, SOLO SE REEMPLAZA
		}
	});
n3.addEventListener("click", function numero3(){	
	actual = pantalla.innerHTML.slice(0,7);
	n3Added = n3.innerHTML="3";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n3Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
				pantalla.innerHTML = actual + n3Added;	//SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}else{
				pantalla.innerHTML = n3Added;	//SI EL VALOR ES = 0, SOLO SE REEMPLAZA
		}
	});
n4.addEventListener("click", function numero4(){	
	actual = pantalla.innerHTML.slice(0,7);
	n4Added = n4.innerHTML="4";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n4Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
	   			pantalla.innerHTML = actual + n4Added;	//SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}else{
			 	pantalla.innerHTML = n4Added;	//SI EL VALOR ES = 0, SOLO SE REEMPLAZA
		} 
	});
n5.addEventListener("click", function numero5(){	
	actual = pantalla.innerHTML.slice(0,7);
	n5Added = n5.innerHTML="5";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n5Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
				pantalla.innerHTML = actual + n5Added;	//SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}else{
				pantalla.innerHTML = n5Added;	//SI EL VALOR ES = 0, SOLO SE REEMPLAZA
		}
	});
n6.addEventListener("click", function numero6(){	
	actual = pantalla.innerHTML.slice(0,7);
	n6Added = n6.innerHTML="6";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n6Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
				pantalla.innerHTML = actual + n6Added;	//SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}else{
				pantalla.innerHTML = n6Added;	//SI EL VALOR ES = 0, SOLO SE REEMPLAZA
		}
	});
n7.addEventListener("click", function numero7(){	
	actual = pantalla.innerHTML.slice(0,7);
	n7Added = n7.innerHTML="7";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n7Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
				pantalla.innerHTML = actual + n7Added;	//SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}else{
				pantalla.innerHTML = n7Added;	//SI EL VALOR ES = 0, SOLO SE REEMPLAZA
		}	
	});
n8.addEventListener("click", function numero8(){	
	actual = pantalla.innerHTML.slice(0,7);
	n8Added = n8.innerHTML="8";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n8Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
				pantalla.innerHTML = actual + n8Added;	//SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}else{
				pantalla.innerHTML = n8Added;
		}
	});
n9.addEventListener("click", function numero9(){	
	actual = pantalla.innerHTML.slice(0,7);
	n9Added = n9.innerHTML="9";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + n9Added;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
				pantalla.innerHTML = actual + n9Added;	//SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}else{
				pantalla.innerHTML = n9Added;	//SI EL VALOR ES = 0, SOLO SE REEMPLAZA
		}
	});


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