const login = localStorage.getItem("login") === "true";

async function carregar(arquivo, id) {
    const res = await fetch(arquivo);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

if (login) {
    carregar("../componentes/headerLogado.html", "header");
    carregar("../componentes/footerLogado.html", "footer");

    document.getElementById("css-header").href = "../componentes/headerLogado.css";
    document.getElementById("css-footer").href = "../componentes/footerLogado.css";

} else {
    carregar("../componentes/header.html", "header");
    carregar("../componentes/footer.html", "footer");

    document.getElementById("css-header").href = "../componentes/header.css";
    document.getElementById("css-footer").href = "../componentes/footer.css";
}