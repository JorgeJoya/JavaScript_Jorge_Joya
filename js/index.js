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

//FUNCION PARA BOTON ON/C
onbtn.addEventListener("click",function reset () {
	onbtnclick = onbtn.innerHTML="0"; 
	pantalla.innerHTML = onbtnclick; //AL PRESIONAR, SE RESETEA EL VALOR,
	portionA="0";
	portionB="0";
	lastportion="0";
	operation="";
	result="0";
	Clip = false;
	});

//FUNCION PARA EL BOTON +/-
signo.addEventListener("click", function AlternateSign(){
	var actual = pantalla.innerHTML.slice(0,8); //HASTA UN MAXIMO DE 8 DIGITOS PREVIOS,		
	if(actual.includes("-")){
		var actual = pantalla.innerHTML.slice(0,9)
		pantalla.innerHTML= actual * -1;	//SI YA HAY UN SIGNO, NO AGREGARLO
	}else{
		pantalla.innerHTML = parseFloat(actual) * -1; //CONVIRTIENDO EL NUMERO A NEGATIVO Y VICEVERSA
	}
	});

//FUNCION PARA EL PUNTO
pnt.addEventListener("click", function punto(){	
	actual = pantalla.innerHTML.slice(0,7); //HASTA UN MAXIMO DE 8 DIGITOS PREVIOS,
	pntAdded = pnt.innerHTML=".";
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes(".")){
			var actual = pantalla.innerHTML.slice(0,8)
				pantalla.innerHTML= actual;	//SI YA HAY UN PUNTO, NO AGREGARLO
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + pntAdded;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGARLO 	
		}else if(actual==""){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + "0" + pntAdded;	//SI YA ESTA ESTA NEGATIVO, SOLO AGREGARLO 	
		}else{
				pantalla.innerHTML = actual + pntAdded; //SI NO HAY UN PUNTO, AGREGARLO
		}
	});

//FUNCION PARA NUMERO 0
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

//FUNCION PARA NUMEROS DEL 1 al 9 AL HACER CLICK EN BOTONES
n1.addEventListener("click",function(){numero("1")});
n2.addEventListener("click",function(){numero("2")});
n3.addEventListener("click",function(){numero("3")});
n4.addEventListener("click",function(){numero("4")});
n5.addEventListener("click",function(){numero("5")});
n6.addEventListener("click",function(){numero("6")});
n7.addEventListener("click",function(){numero("7")});
n8.addEventListener("click",function(){numero("8")});
n9.addEventListener("click",function(){numero("9")});

function numero(valor){
	actual = pantalla.innerHTML.slice(0,7);	//HASTA UN MAXIMO DE 7 DIGITOS PREVIOS, 
		if(pantalla.innerHTML.length == "8"){
			var actual = pantalla.innerHTML.slice(0,8); //SI YA HAY 8 DIGITOS, NO AGREGAR
		}else if(actual.includes("-")){
			var actual = pantalla.innerHTML.slice(0,8);
				pantalla.innerHTML = actual + valor;	//SI YA ESTA NEGATIVO, SOLO AGREGAR DIGITO 	
		}else if (actual!="0"){
				pantalla.innerHTML = actual + valor; //SI EL VALOR ES > 0, SE AGREGA EL DIGITO
		}else{
				pantalla.innerHTML = valor; //SI EL VALOR ES = 0, SOLO SE REEMPLAZA
		}
}

///VARIABLES PARA REALIZAR LAS OPERACIONES ARITMETICAS
var portionA;
var portionB;
var lastportion;
var operation;
var result;
var Clip = false;
//BOTONES DE LAS OPERACIONES ARITMETICAS
sumar.addEventListener("click",function sum() {
	portionA = pantalla.innerHTML;
	operation = sumar.innerHTML="+";
	CleanUp(); 
	Clip = false;
	});
restar.addEventListener("click",function rest() {
	portionA = pantalla.innerHTML;
	operation = restar.innerHTML="-"; 
	CleanUp();
	Clip = false; 
	});
multiplicar.addEventListener("click",function mult() {
	portionA = pantalla.innerHTML;
	operation = multiplicar.innerHTML="*"; 
	CleanUp(); 
	Clip = false;
	});
dividir.addEventListener("click",function div() {
	portionA = pantalla.innerHTML;
	operation = dividir.innerHTML="/"; 
	CleanUp(); 
	Clip = false;
	});
resultbtn.addEventListener("click",function resultClick() {
if(!Clip){
		portionB= pantalla.innerHTML;
		lastportion= portionB;
		resolve();	 	//AL PRIMER CLICK EN EL BOTON (=)
	}else{
		resolve(); 		//AL DAR CLICK NUEVAMENTE
	}
Clip = true;	
pantalla.innerHTML=result.toString().slice(0,8);
portionA = result;
	});
function CleanUp(){
	pantalla.innerHTML = ""; //LIMPIAR PANTALLA
}
//FUNCION DE OPERACION ARITMETICA
function resolve(){
	switch(operation) {
		case "+":
		result = eval(parseFloat(portionA) + parseFloat(portionB)); //SUMAR
		break;
		case "-":
		result = eval(parseFloat(portionA) - parseFloat(portionB)); //RESTAR
		break;
		case "*":
		result = eval(parseFloat(portionA) * parseFloat(portionB)); //MULTIPLICAR
		break;
		case "/":
		result = eval(parseFloat(portionA) / parseFloat(portionB)); //DIVIDIR
		break;
	};	
}

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