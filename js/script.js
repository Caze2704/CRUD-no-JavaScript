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
   }else if(!email.includes("@")){
          msg.classList.add("ativo", "erro")
          msg.textContent = '[ERRO] Insira um email válido!'
          return
   } else if(idade > 100 || idade < 5){
           msg.classList.add("ativo", "erro")
          msg.textContent = "[ERRO] Insira uma Idade válida!"
          return
   }
   msg.classList.add("sucesso", "ativo")
   msg.textContent = '[SUCESSO] Usuário cadastrado com sucesso!'
   usuarios.push({
    nome: nome,
    email: email,
    idade: idade
   })
   localStorage.setItem("cadastros", JSON.stringify(usuarios))
   console.log(usuarios)
   renderizarvalor()
   inputnome.value = ""
   inputidade.value = ""
   inputemail.value = ""
   inputnome.focus()
}
// fim da primeira sessão de código, 15/03 as 00:59
function renderizarvalor(){
     const listausuarios = document.getElementById("lista-usuarios")
     const containerusuarios = document.querySelector("div#usuarios-container")
     
     containerusuarios.textContent = '' 
     if (usuarios.length < 1){
     listausuarios.classList.remove("ativo")
     }else{
          listausuarios.classList.add("ativo")
     }
     usuarios.forEach((registro, index) => {
          let linha = document.createElement("div")
          let texto = document.createElement("span")
          let botaoEditar = document.createElement("button")
          let botaoRemover = document.createElement("button")
          linha.classList.add("usuario")
          texto.textContent = `${registro.nome} - ${registro.email} - ${registro.idade}`
          botaoEditar.textContent = 'Editar'
          //botaoEditar.addEventListener("click", )
          botaoRemover.textContent = 'Remover'
          botaoRemover.addEventListener("click", () => Remover(index))
          linha.appendChild(texto)
          linha.appendChild(botaoEditar)
          linha.appendChild(botaoRemover)
          containerusuarios.appendChild(linha)
          console.log("linha:", linha)
     });
}
function Remover(index){
     usuarios.splice(index, 1)
     localStorage.setItem("cadastros", JSON.stringify(usuarios))
     renderizarvalor()
}