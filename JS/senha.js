const senha = document.getElementById("senha");
const olho = document.getElementById("olho");

olho.addEventListener("click", () => {

    if (senha.type === "password") {
        senha.type = "text";
        olho.src = "../assets/img/login/olhoAberto.svg";
    } else {
        senha.type = "password";
        olho.src = "../assets/img/login/olhoFechado.svg";
    }

});