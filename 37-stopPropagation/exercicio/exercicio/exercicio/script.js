let caixa1 = document.querySelector("#caixa1")
let caixa2 = document.querySelector("#caixa2")
let btn = document.querySelector("#btn_copiar")
let todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
     el.addEventListener("click", (evt)=>{
          let curso = evt.target
          curso.classList.toggle("selecionado")
          // console.log(el)
     })
})

btn.addEventListener("click", ()=>{
     let cursoSelecionados=[...document.querySelectorAll(".selecionado")]
     let curdoNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
     // console.log(curdoNaoSelecionados)
     cursoSelecionados.map((el)=>{
          caixa2.appendChild(el)
     })
     curdoNaoSelecionados.map((el)=>{
          caixa1.appendChild(el)
     })
     // console.log(cursoSelecionados)
})