const btHeader = document.querySelector("header button");
const btAdicionar = document.querySelector("main>.btVerde");
const btLixeira = document.querySelectorAll(".contatos button")
const paiDoModal = document.querySelector(".paiDoModal");
const modalAdicionar = document.querySelector(".modal-adicionar");
const modalExcluir = document.querySelector(".modal-excluir")
const btFecharAdicionar = document.querySelectorAll(".modal-adicionar button")
const btAdicionarAdd = document.querySelector(".modal-adicionar .btVerde")
const btFecharExcluir = document.querySelectorAll(".modal-excluir button")


btHeader.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = "../login/index.html"
})

btAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    paiDoModal.classList.add("modal-backdrop")
    modalAdicionar.classList.remove("oculto")
})

btLixeira.forEach(botao => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();
        paiDoModal.classList.add("modal-backdrop")
        modalExcluir.classList.remove("oculto")
    })
})

btFecharAdicionar.forEach(botao => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();
        paiDoModal.classList.remove("modal-backdrop")
        modalAdicionar.classList.add("oculto")
    })
})

btFecharExcluir.forEach(botao => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();
        paiDoModal.classList.remove("modal-backdrop")
        modalExcluir.classList.add("oculto")
    })
})