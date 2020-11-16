
//return window.location.assign('/pregunta2.html')
 let pagina = 0;
 let puntos=0; 
 let ultima_pagina = preguntas.length;
 
 function ocultar_div(id) {
 	var x = document.getElementById(id);
  	x.style.display = "none";
  	mostrar_div()  	
 }

function mostrar_div(){
	document.getElementById("contenedor_quiz_general").style.display = "grid"; 
	mostrar_preguntas(preguntas);
}

function mostrar_fin(){
  if (puntos<5){
    document.getElementById("puntaje").innerHTML = "Upss, eres realmente un fan? Obtuviste: " + puntos + " puntos";
  } else if(puntos <10){
      document.getElementById("puntaje").innerHTML = "Brillante!  Obtuviste: " + puntos+ " puntos";
  } else{
      document.getElementById("puntaje").innerHTML = "Fan 100%  Obtuviste: " + puntos + " puntos";
      }
  document.getElementById("resultado_contenedor").style.display="grid";
  document.getElementById("contenedor_quiz_general").style.display = "none";
  document.querySelector(".opciones_lista").style.display="grid";
  document.getElementById("lista").style.display="none";
  document.getElementById("next_btn").style.display="grid";
  puntos =0;

}

function mostrar_preguntas(preguntas){
  
  const pregunta_txt = document.querySelector(".pregunta_txt");
  const opciones_lista = document.querySelector(".opciones_lista");

  let que_tag = '<span>' + preguntas[pagina].num + "." + preguntas[pagina].pregunta + '</span>';
  let opcion_tag =  '<div class="opcion"><span>'+ preguntas[pagina].opciones[0] +'</span></div>'
                  + '<div class="opcion"><span>'+ preguntas[pagina].opciones[1] +'</span></div>'
                  + '<div class="opcion"><span>'+ preguntas[pagina].opciones[2] +'</span></div>';
    
    pregunta_txt.innerHTML = que_tag; 
    opciones_lista.innerHTML = opcion_tag; 

    const opcion = opciones_lista.querySelectorAll(".opcion");
    for(i=0; i < opcion.length; i++){
        opcion[i].setAttribute("onclick", "opcion_selecionada(this)");
    }
    pagina++;

     if(pagina == 2) {
        document.getElementById("mabelbuzo").src="img/quienes.png";
      }else
        document.getElementById("mabelbuzo").src="img/mabebuzo.png";       
}

function opcion_selecionada(a){
  const dato_txt = document.querySelector(".dato_txt");
  let rpta = a.textContent;
  let rpta_correcta = preguntas[pagina - 1].respuesta; //ya sume antes pag
  if (rpta == rpta_correcta){
    puntos++;
    console.log(puntos);
    let dato_tag ='<span>' + "Correcto : "  + preguntas[pagina-1].dato + '</span>';
    dato_txt.innerHTML = dato_tag; 
  }else {
   let dato_tag = '<span>' + "Incorrecto : "  + preguntas[pagina-1].dato + '</span>';
   dato_txt.innerHTML = dato_tag; 
  }
}

function btn_sig(){
  var fin = document.getElementById("next_btn");
  if (pagina < preguntas.length){ //-1
    mostrar_preguntas(preguntas);
  }else{
    mostrar_opc_lista();
    //console.log("quiz completado");
  }                
}

function btn_salir(){
  document.getElementById("contenedor_principal").style.display = "grid"; 
  document.getElementById("contenedor_quiz_general").style.display = "none";
  document.getElementById("resultado_contenedor").style.display="none";
}
    
      
 function mostrar_opc_lista(){
  pregunta_txt = document.querySelector(".pregunta_txt").innerHTML="10. ¿En qué mes cumplen años los gemelos?";
  document.querySelector(".opciones_lista").style.display="none";
  document.getElementById("lista").style.display="grid";
  document.getElementById("next_btn").style.display="none";
 }
function fin(){
  const dato_txt = document.querySelector(".dato_txt");
  var x = document.getElementById("mes").selectedIndex;
  if (x ==7){
    puntos++; 
  }
  
  pagina = 0
  mostrar_fin();
}