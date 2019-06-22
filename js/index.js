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