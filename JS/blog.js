const pesquisa = document.getElementById("pesquisa");
const blogs = document.querySelectorAll(".blog");


pesquisa.addEventListener("input", () => {

  const texto = pesquisa.value.toLowerCase();


  blogs.forEach((blog) => {

    const titulo = blog.querySelector("h2").textContent.toLowerCase();
    const descricao = blog.querySelector("p").textContent.toLowerCase();


    if (
      titulo.includes(texto) ||
      descricao.includes(texto)
    ) {
      blog.style.display = "flex";
    } else {
      blog.style.display = "none";
    }

  });

});