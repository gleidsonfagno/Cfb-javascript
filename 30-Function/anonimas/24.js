const f = function (v1,v2){
     return v1+v2
}
console.log(f(21,21))

const rest= function(...valores){
     let res = 0
     for(v of valores){
          res+=v
     }
     return res
}

console.log(rest(2))

// funcao contrutor
const contrutora = new Function("v1", "v2", "v3", "return v1+v2+v3")
console.log(contrutora(16,4,32));