let btn = document.querySelector('#verSenha')
let btnConfirme = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let conFirmSenha = document.querySelector('#conFirmSenha')
let labelConFirmSenha = document.querySelector('#labelConFirmSenha')
let validConfirmSenha = false

let msgErro = document.querySelector("#msgErro")
let msgSuccess = document.querySelector("#msgSuccess")

// validacao para o nome do usuario
nome.addEventListener('keyup', ()=>{
     if(nome.value.length <= 2){
          labelNome.setAttribute('style', 'color: red')
          labelNome.innerHTML = 'Nome  *Insira no minimo 3 caracteres'
          nome.setAttribute('style', 'border-color: #ff0000')
          validNome = false
     }else{
          labelNome.setAttribute('style', 'color: #008000')
          labelNome.innerHTML = 'Nome'
          nome.setAttribute('style', 'border-color: #008000')
          validNome = true
     }
})
// validaçao do usuario
usuario.addEventListener('keyup', ()=>{
     if(usuario.value.length <= 4){
          labelUsuario.setAttribute('style', 'color: red')
          labelUsuario.innerHTML = 'Usuario  *Insira no minimo 5 caracteres'
          usuario.setAttribute('style', 'border-color: #ff0000')
          validUsuario = false
     }else{
          labelUsuario.setAttribute('style', 'color: #008000')
          labelUsuario.innerHTML = 'Usuario'
          usuario.setAttribute('style', 'border-color: #008000')
          validUsuario = true
     }
})
// validaçao de senha

senha.addEventListener('keyup', ()=>{
     if(senha.value.length <= 5){
          labelSenha.setAttribute('style', 'color: red')
          labelSenha.innerHTML = 'Senha  *Insira no minimo 6 caracteres'
          senha.setAttribute('style', 'border-color: #ff0000')
          validSenha = false
     }else{
          labelSenha.setAttribute('style', 'color: #008000')
          labelSenha.innerHTML = 'Senha'
          senha.setAttribute('style', 'border-color: #008000')
          validSenha = true
     }
})

// validacao de confirme senha
conFirmSenha.addEventListener('keyup', ()=>{
     if(senha.value != conFirmSenha.value){
          labelConFirmSenha.setAttribute('style', 'color: red')
          labelConFirmSenha.innerHTML = 'Confirma Senha  *As senhas nao confere'
          conFirmSenha.setAttribute('style', 'border-color: #ff0000')
          validConfirmSenha = false
     }else{
          labelConFirmSenha.setAttribute('style', 'color: #008000')
          labelConFirmSenha.innerHTML = 'Confirma Senha'
          conFirmSenha.setAttribute('style', 'border-color: #008000')
          validConfirmSenha = true
     }
})

// cadastrar function
function cadastrar(){
     if(validNome && validUsuario && validSenha && validConfirmSenha){
          let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
          listaUser.push(
               {
                    nomeCad: nome.value,
                    userCad: usuario.value,
                    senhaCad: senha.value
               }
          )
          // salvarno local storage
          localStorage.setItem('listaUser', JSON.stringify(listaUser))


          msgSuccess.setAttribute('style', 'display: block')
          msgSuccess.innerHTML = '<strong>Cadastrando usuario....</strong>'

          msgErro.setAttribute('style', 'display: none')
          msgErro.innerHTML = ''

          // quando o usuario for cadastrado ele vai para essa tela de login
          setTimeout(()=>{
               window.location.href = "index.html"
          }, 3000)
     }else{
          msgErro.setAttribute('style', 'display: block')
          msgErro.innerHTML = '<strong>Preencha os campos corretamente antes de cadastra</strong>'

          msgSuccess.innerHTML = ''
          msgSuccess.setAttribute('style', 'display: none')
     }
}

btn.addEventListener("click", ()=>{
     let inputSenha = document.querySelector('#senha')

     if(inputSenha.getAttribute('type') == 'password'){
          inputSenha.setAttribute('type', 'text')
     }else{
          inputSenha.setAttribute('type', 'password')
     }
})

btnConfirme.addEventListener("click", ()=>{
     let inputConfirmSenha = document.querySelector('#conFirmSenha')

     if(inputConfirmSenha.getAttribute('type') == 'password'){
          inputConfirmSenha.setAttribute('type', 'text')
     }else{
          inputConfirmSenha.setAttribute('type', 'password')
     }
})