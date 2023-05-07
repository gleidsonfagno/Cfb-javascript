var tempo;
function mudarCor(){
     var obj = document.getElementById("dv1")
     var r = Math.floor(Math.random()*255)
     var g = Math.floor(Math.random()*255)
     var b = Math.floor(Math.random()*255)

     obj.style.background="rgb("+r+","+g+","+b+")";
}

// var tempo = setTimeout(mudarCor, 3000);
// vai mudar depois de 3 segundos
// var tempo1 = setInterval(mudarCor, 100);
// vai chamar a funcao vai serem cada tempo de chamada determinda sem precisar recarregar


function iniciar(){
     tempo = setInterval(mudarCor, 1000)
}

function parar(){
     clearInterval(tempo)
}
// document.getElementById("bt1").addEventListener("click", iniciar);

// document.getElementById("bt2").addEventListener("click", parar);

function addEventos(){
     document.getElementById("bt1").addEventListener("click", iniciar);

     document.getElementById("bt2").addEventListener("click", parar);
}
window.addEventListener("load",addEventos);