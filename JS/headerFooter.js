const login = localStorage.getItem("login") === "true";

async function carregar(arquivo, id) {
  const busca = await fetch(arquivo);
  const dados = await busca.text();
  document.getElementById(id).innerHTML = dados;
}

if (login) {
  carregar("../componentes/headerLogado.html", "headerLogado");
  carregar("../componentes/footerLogado.html", "footerLogado");
} else {
  carregar("../componentes/header.html", "header");
  carregar("../componentes/footer.html", "footer");
}