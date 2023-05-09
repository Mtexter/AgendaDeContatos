const inputs = document.querySelectorAll(".input")
const btlogin = document.querySelector("button")
const mensagem = document.querySelector(".mensagem")
const cadastro = document.querySelector(".parteBaixa a")

btlogin.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!inputs[0].value || !inputs[1].value) {
        mensagem.textContent = "Preencher todos os campos"
        mensagem.style.color = "red"
    } else {
        window.location = "../home/index.html";
    }
})

cadastro.addEventListener("click", () => {
    window.location = "../cadastro/index.html";
})