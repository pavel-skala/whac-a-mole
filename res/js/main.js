const startPage = document.getElementById("startPage");
const startGame = document.getElementById("startGame");
const game = document.getElementById("game");
const moles = document.getElementsByClassName("mole");
const holes = document.getElementsByClassName("hole");
const hammer = document.getElementById("hammer");

startGame.onclick = () => {
    startPage.style.display = "none";
    game.style.display = "flex";
}

window.addEventListener('mousemove', e =>{
    hammer.style.top = e.pageY + 'px';
    hammer.style.left = e.pageX + 'px';
})

    // [...moles].forEach((mole) => {
    //     mole.style.animation = `moleIn 1000ms`;
    //     mole.style.width = "140px";
    //     mole.style.transform = "translate(-10%, -40%)";

    // });
