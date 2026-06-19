const botoes = document.querySelectorAll(".botao");
const dirt = document.querySelector(".grama");
const lavaChicken = document.getElementById("lavaChicken");
const SomClick = document.getElementById("SomClick");
const inLever = document.getElementById("inLever");
const outLever = document.getElementById("outLever");
const inPiston = document.getElementById("inPiston");
const outPiston = document.getElementById("outPiston");
const Cabecalho = document.querySelector(".header");
const body = document.body;
const mob3d = document.getElementById("mob3d");
const mob3dWarden = document.getElementById("mob3dWarden");
const dimensoes = ["OverWorld", "Nether", "End", "Ocean"];
const pagina = document.querySelector(".pagina");
const textos = {

    OverWorld: "A Abelha é um mob neutro encontrado em florestas floridas. Ela coleta pólen das flores e produz mel em suas colmeias. Atacará o jogador apenas se for provocada.",

    Noite: "O Zumbi é um mob hostil que aparece durante a noite ou em locais escuros. Ele persegue jogadores e aldeões, atacando corpo a corpo até ser derrotado.",

    Nether: "O Wither é um poderoso chefe invocado pelos jogadores no Nether ou em outras dimensões. Ele dispara projéteis explosivos e é considerado um dos inimigos mais perigosos do Minecraft.",

    End: "O Enderman é um mob neutro da dimensão End. Ele pode se teleportar e só se torna hostil quando o jogador olha diretamente para seus olhos.",

    Ocean: "O Axolote é um mob aquático amigável encontrado em cavernas exuberantes. Ele auxilia o jogador em combates debaixo d'água e é uma das criaturas mais raras do Minecraft."
};


botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        SomClick.currentTime = 0;
        SomClick.play();

        const dimensao = botao.dataset.dimensao;

        if(dimensao == "OverWorld" && body.classList.contains("OverWorld")){
            body.classList.toggle("Noite");
            
            if(body.classList.contains("Noite")){
                mob3d.src = "src/assets/models/minecraft_-_zombie.glb";
                pagina.textContent = textos.Noite;
                hostil = true
            }else{
                mob3d.src = "src/assets/models/minecraft_bee.glb";
                pagina.textContent = textos.OverWorld;
            }
            return;
        }

        dimensoes.forEach(m => {
            body.classList.remove(m);
        });
        pagina.textContent = textos[dimensao];
        body.classList.add(dimensao);

        let hostil = false

        switch(dimensao){

            case "OverWorld":
                mob3d.src = "src/assets/models/minecraft_bee.glb";
                pagina.textContent = textos.OverWorld;
                hostil = false;
                break;

            case "Nether":
                mob3d.src = "src/assets/models/minecraft_animated_wither_boss.glb";
                pagina.textContent = textos.Nether;
                hostil = true;
                break;

            case "End":
                mob3d.src = "src/assets/models/minecraft_-_enderman.glb";
                pagina.textContent = textos.End;
                hostil = true;
                break;

            case "Ocean":
                mob3d.src = "src/assets/models/axolote_semi_hecho.glb";
                pagina.textContent = textos.Ocean;
                hostil = false;
                break;
        }
        
    });
});
document.querySelectorAll(".lever").forEach(lever => {
    lever.addEventListener("click", () => {

        
        
        const circuito = lever.parentElement;
        const ativo = circuito.classList.toggle("On");

        if (ativo) {
            inLever.currentTime = 0;
            inLever.play();

        switch(circuito.dataset.tipo){

            case "note":
                lavaChicken.currentTime = 0;
                lavaChicken.play();
                console.log("lavaChicken")
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
const creeper = document.querySelector(".creeper");

function reiniciarCreeper() {
    console.log("reiniciando");

    creeper.style.animation = "none";
    creeper.offsetHeight;
    creeper.style.animation = "andar 4s linear";

    const src = creeper.src;
    creeper.src = "";
    creeper.src = src;
}

creeper.addEventListener("animationend", reiniciarCreeper);

let click = 0;

mob3dWarden.addEventListener("dblclick", () => {

        mob3dWarden.currentTime = 0;
        mob3dWarden.play();
        console.log("warden");
        setTimeout(() => {
            mob3dWarden.pause();
        }, 2700);
});
