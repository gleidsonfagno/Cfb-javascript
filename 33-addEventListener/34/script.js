// const c1 = document.querySelector("#c1")
const cusrso = [...document.querySelectorAll(".curso")]

cusrso.map((el) =>{
     el.addEventListener("click", (evt)=>{
          const el = evt.target
          el.classList.add("destaque")
     })
})

// const msg = () => {
//      // alert("clicou")
//      c1.innerHTML = "javascript"
//      classList.add("destaque")
// }
// c1.addEventListener("click", msg)

// c1.addEventListener("click", (evt)=>{
//      // const el = evt.target
//      // el.classList.add("destaque")
// })