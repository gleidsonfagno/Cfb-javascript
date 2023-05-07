const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evento)=> {
     // console.log(evento)
     console.log("clicou")
})

cursos.map((el) =>{
     el.addEventListener("click", (evento) =>{
          evento.stopPropagation()
     })
})

// btn_c1.addEventListener("click", (evento)=> {
//      evento.stopPropagation()
//      console.log("clicou nos botoes")
// })