const startPage = document.getElementById("startPage");
const playGame = document.getElementById("playGame");
const game = document.getElementById("game");
const startGame = document.getElementById("startGame");
const scoreNumber = document.getElementById("scoreNumber");
const moles = document.getElementsByClassName("mole");
const holes = document.getElementsByClassName("hole");
const hammer = document.getElementById("hammer");

let score = 0;

startGame.onclick = () => {
    startPage.style.display = "none";
    game.style.display = "flex";
}

window.addEventListener('mousemove', e =>{
    hammer.style.top = e.pageY + 'px';
    hammer.style.left = e.pageX + 'px';
})

window.onmousedown = () => {
    hammer.style.transform = "translate(-20%, -20%) rotate(-75deg)";
}

window.onmouseup = () => {
    hammer.style.transform =  "translate(-48%, -35%) rotate(-26deg)";
}

        
function run() {
            const i = Math.floor(Math.random() * moles.length);
            
            moles[i].style.animation = `moleIn 400ms forwards`;
            [...moles].forEach((mole) => {
                mole.onclick = () => {
                    mole.style.animation = `moleOut 400ms forwards`;
                    score++;
                    scoreNumber.innerText = score;
                }
            });
}

startGame.onclick = () => {
    run()
}
