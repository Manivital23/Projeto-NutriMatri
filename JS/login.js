const botaoLogin = document.querySelector(".login");

botaoLogin.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("login", "true");

    window.location.href = "../index.html";
});