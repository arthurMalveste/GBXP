//cadastro

const botaopipe = document.getElementById("botao-pipe");
const botaocoin = document.getElementById("botao-coin");
const coin = document.getElementById("coin");
const pipe = document.getElementById("pipe");

botaocoin.onclick = function tocar() {
    coin.play()
};

botaopipe.onclick = function tocar() {
    pipe.play()
};

// loja

const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));