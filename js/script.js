const botao = document.getElementById("cadastro")
botao.addEventListener("click", cadastro)
let usuarios = JSON.parse(localStorage.getItem("cadastros")) || []
function cadastro(){
    const inputnome = document.getElementById("inputnome")
    const inputemail = document.getElementById("inputemail")
    const inputidade = document.getElementById("inputidade")
    let msg = document.querySelector("#msg")
    let nome = inputnome.value.trim()
    let email = inputemail.value.trim()
    let idade = Number(inputidade.value)
    console.log("nome:", nome)
    console.log("idade:", idade)
    console.log("email:", email)
   if (nome.length <= 3 || email.length <= 8){
        msg.classList.add("ativo", "erro")
        msg.textContent = '[ERRO] Insira dados válidos!'
        console.log("entrou no if")
        return
   }
   msg.classList.add("ativo", "sucesso")
   msg.textContent = '[SUCESSO] Usuário cadastrado com sucesso!'
   usuarios.push({
    nome: nome,
    email: email,
    idade: idade
   })
   localStorage.setItem("cadastros", JSON.stringify(usuarios))
   console.log(usuarios)
}
// fim da primeira sessão de código, 15/03 as 00:59