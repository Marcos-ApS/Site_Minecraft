const botoes = document.querySelectorAll(".botao");
const body = document.body;

const dimensoes = ["OverWorld", "Nether", "End", "Ocean"];

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const dimensao = botao.dataset.dimensao;

        if(dimensao == "OverWorld" && body.classList.contains("OverWorld")){
            body.classList.toggle("Noite");
            return;
        }

        dimensoes.forEach(d => {
            body.classList.remove(d);
        });

        body.classList.add(dimensao);
    });
});