const soma = (...valores)=>{
     const somar = val =>{
          let res = 0
          for(v of val)
          res+=v
          return res
     }
     return somar(valores)
}
var valor =[10,5,6]
console.log(soma(10,3,4,5))
console.log(soma(...valor))