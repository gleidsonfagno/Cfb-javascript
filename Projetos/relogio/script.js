function relogio(){
     var data = new Date();
     var hora = data.getHours();
     var minutos = data.getMinutes();
     var segundos = data.getSeconds();
     // formatand a hora 
     if(hora < 10){
          hora= "0"+hora
     }
     if(minutos < 10){
          minutos= "0"+minutos
     }
     if(segundos < 10){
          segundos= "0"+segundos
     }
     // imprimindo a hora
     var horas = `${hora} : ${minutos} : ${segundos}`
     var set = document.getElementById("rel").value = horas;

}

var tempo = setInterval(relogio,1000);

addEventListener("load", relogio)
// console.log(relogio())
