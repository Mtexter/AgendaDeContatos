const inputs = document.querySelectorAll(".input")
const btcadastrar = document.querySelector(".btVerde")
const btCancelar = document.querySelector(".btVermelho")
const mensagem = document.querySelector(".mensagem")
const cadastro = document.querySelector("p a")

btcadastrar.addEventListener("click", (event) => {
    event.preventDefault();
    if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
        mensagem.textContent = "Preencher todos os campos"
        mensagem.style.color = "red"
    } else {
        window.location = "../login/index.html";
    }
})

btCancelar.addEventListener("click", () => {
    inputs.forEach(input => {
        input.value = ""
    })
})


cadastro.addEventListener("click", () => {
    window.location = "../login/index.html";
})