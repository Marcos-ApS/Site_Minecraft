const botoes = document.querySelectorAll(".botao");
const SomClick = document.getElementById("SomClick");
const Cabecalho = document.getElementsByClassName(".header")
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
        lever.parentElement.classList.toggle("On");
    });
});

const dirt = document.querySelector(".grama")
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
    const percentage = (scrollTop / docHeight) * 100;
  

    if(percentage >= 43) {
        dirt.style.display = "none";
    }else {
        dirt.style.display = "flex";
    }
});