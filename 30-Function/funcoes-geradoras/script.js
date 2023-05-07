function* cores(){
     yield "vermelho"
     yield "azul"
     yield "verde"
}

const itc =  cores()
for(i=0; i<3; i++){
     console.log(itc.next().value)
}

// function* perguntas(){
//      const nome = yield "qual o seu nome?"
//      const esport = yield "qual seu esport favorito?"
//      return "seu nome é " + nome + " seu esport favorito e " + esport 
// }
// let itp = perguntas()
//      console.log(itp.next().value)
//      console.log(itp.next("fagno").value)
//      console.log(itp.next("nataçao").value)

// for(i=0; i< 2; i++){
//      var nomes = "fagno"
//      console.log(itp.next().value)
//      console.log(itp.next("fagno").value)
// }

function* contador(){
     var i = 0
     while(true){
          yield i++
          if(i>5)
          break
     }
}
var itd = contador()
for(let c of itd){
     console.log(c)
}
// var itd = contador()
// num = "contador"
// console.log(itd.next().value)
// for(i =0; i< 10; i++){
//      console.log(num)
//      console.log(itd.next().value)
// }