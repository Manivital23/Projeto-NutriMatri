const planoSocial = document.querySelector(".tipoDePlanos .social");
const planoPadrao = document.querySelector(".tipoDePlanos .padrao");
const formulario = document.querySelector(".formulario");

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

const btnTopo = document.querySelector(".btnTopo");

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
