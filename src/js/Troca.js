const botoes = document.querySelectorAll(".botao");
const dirt = document.querySelector(".grama");
const lavaChicken = document.getElementById("lavaChicken");
const SomClick = document.getElementById("SomClick");
const inLever = document.getElementById("inLever");
const outLever = document.getElementById("outLever");
const inPiston = document.getElementById("inPiston")
const outPiston = document.getElementById("outPiston")
const Cabecalho = document.querySelector(".header")
const body = document.body;

const dimensoes = ["OverWorld", "Nether", "End", "Ocean"];

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        SomClick.currentTime = 0;
        SomClick.play();

        const dimensao = botao.dataset.dimensao;

        if(dimensao == "OverWorld" && body.classList.contains("OverWorld")){
            body.classList.toggle("Noite");
            return;
        }

        dimensoes.forEach(m => {
            body.classList.remove(m);
        });

        body.classList.add(dimensao);
        
    });
});
document.querySelectorAll(".lever").forEach(lever => {
    lever.addEventListener("click", () => {

        
        
        const circuito = lever.parentElement;
        const ativo = circuito.classList.toggle("On");
        console.log(lavaChicken);

        if (ativo) {
            inLever.currentTime = 0;
            inLever.play();

        switch(circuito.dataset.tipo){

            case "note":
                lavaChicken.currentTime = 0;
                lavaChicken.play();
                break;

            case "piston":
                inPiston.currentTime = 0;
                inPiston.play();
                break;

            case "lamp":
                console.log("Lâmpada ligada");
                break;
        }

        } else {

            outLever.currentTime = 0;
            outLever.play();

            switch(circuito.dataset.tipo){

                case "piston":
                    outPiston.currentTime = 0;
                    outPiston.play();
                    break;

                 case "note":
                    lavaChicken.pause();
                    lavaChicken.currentTime = 0;
                    break;
            }   
        }

    });
});

const redstone = document.querySelector("#Redstone");
window.addEventListener("scroll", () => {
    const posicao = redstone.getBoundingClientRect().top;
    console.log(redstone.getBoundingClientRect().top);

    if (posicao <= 200) {
        dirt.classList.add("oculta");
    } else {
        dirt.classList.remove("oculta");
    }
});