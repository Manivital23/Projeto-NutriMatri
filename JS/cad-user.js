const planoSocial = document.querySelector(".tipoDePlanos .social");
const planoPadrao = document.querySelector(".tipoDePlanos .padrao");
const formulario = document.querySelector(".formulario");
const submit = document.getElementById("botaoSubmit2")
const btnTopo = document.querySelector(".btnTopo");
const btnEnviar = document.querySelector(".btnsubmit")

btnEnviar.addEventListener("click",()=>{
  window.location.href = "http://127.0.0.1:5501/index.html"
})

formulario.style.display = "none";

planoSocial.addEventListener("click", () => {
  formulario.style.display = "block";

  planoSocial.classList.add("ativo");
  planoPadrao.classList.add("ativo");
});

planoPadrao.addEventListener("click", () => {
  formulario.style.display = "none";

  planoSocial.classList.remove("ativo");
  planoPadrao.classList.remove("ativo");
});

btnTopo.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

btnTopo.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
