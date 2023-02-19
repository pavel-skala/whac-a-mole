const startPage = document.getElementById("startPage");
const playGame = document.getElementById("playGame");
const game = document.getElementById("game");
const startGame = document.getElementById("startGame");
const scoreNumber = document.getElementById("scoreNumber");
const moles = document.getElementsByClassName("mole");
const holes = document.getElementsByClassName("hole");
const hammer = document.getElementById("hammer");

let score = 0;
let maxScore = 0;
let moleType;
let i;

startGame.onclick = () => {
    startPage.style.display = "none";
    game.style.display = "flex";
};

window.addEventListener("mousemove", (e) => {
    hammer.style.top = e.pageY + "px";
    hammer.style.left = e.pageX + "px";
});

window.onmousedown = () => {
    hammer.style.transform = "translate(-20%, -20%) rotate(-75deg)";
};

window.onmouseup = () => {
    hammer.style.transform = "translate(-48%, -35%) rotate(-26deg)";
};
const RandomMole = (minimum, maximum) => {
    const myMole = Math.floor(
        Math.random() * (maximum - minimum + 1 + minimum)
    );
    return myMole;
};

const MoleFunction = () => {
    i = RandomMole(0, 8);
    moleType = RandomMole(0, 4);
    moles[i].style.backgroundImage = `url(./res/img/mole${moleType}.png)`
    moles[i].style.animation = `moleIn 300ms forwards`;
};

function run() {
    MoleFunction();
    setInterval(() => {
        moles[i].style.animation = `moleOut 300ms forwards`;

        MoleFunction();
    }, 1000);
}

[...moles].forEach((mole) => {
    mole.onclick = () => {
        mole.style.animation = `moleOut 300ms forwards`;
        score++;
        scoreNumber.innerText = score;
    };
});

startGame.onclick = () => {
    run();
};
