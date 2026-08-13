const botao = document.getElementById('btn-Info')
const modal = document.getElementById("moda-lInfo")
const close = document.getElementById("fechar")
const btnEnviar = document.querySelector("btn-eviar1")

btn-eviar1.addEventListener("click",()=>{
  window.location.href = "/index.html"
})

botao.addEventListener("click", (e)=> {
  e.preventDefault()
  modal.classList.add("ativo")
})

close.addEventListener("click", (e)=> {
e.preventDefault()
modal.classList.remove("ativo")
})