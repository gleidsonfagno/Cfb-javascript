
var px = 0;
var py = 0;

function move (){
     var obj = document.getElementById("dv1");
     var tecla = event.keyCode;
     // 37 = esquerda  38 =cima 39= direita 40 baixo
     if(tecla == 37){
          px-= 10;
          obj.style.left= px+"px";
     }else if(tecla == 38){
          py-= 10;
          obj.style.top = py+"px";
     }else if(tecla == 39){
          px+= 10;
          obj.style.left = px+"px";
     }else if(tecla == 40){
          py+= 10;
          obj.style.top = py+"px";
     }else if(tecla == 13){
          alert("Evento keydow removido");
          this.removeEventListener("keydown",move);
     }
}

document.addEventListener("keydown", move);