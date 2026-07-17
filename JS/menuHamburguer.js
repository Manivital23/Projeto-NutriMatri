setTimeout(() => {

  const menu = document.querySelector(".menu");
  const botao = document.querySelector(".menu-hamburguer");
  const dropdown = document.querySelectorAll(".dropdown");

  if (!menu || !botao) return;


  botao.addEventListener("click", () => {
    menu.classList.toggle("active");
  });


  dropdown.forEach((item) => {

    const link = item.querySelector("a");

    link.addEventListener("click", (evento) => {

      evento.preventDefault();

      item.classList.toggle("aberto");

    });

  });


}, 500);