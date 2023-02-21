const startPage = document.getElementById("startPage");
const playGame = document.getElementById("playGame");
const game = document.getElementById("game");
const startGame = document.getElementById("startGame");
const scoreNumber = document.getElementById("scoreNumber");
const timerNumber = document.getElementById("timerNumber");
const molesInfoPoints = document.getElementsByClassName("moleInfoPoints");
const moles = document.getElementsByClassName("mole");
const holes = document.getElementsByClassName("hole");
const hammer = document.getElementById("hammer");

let score = 0;
let maxScore = 0;
let timeLeft = 30;
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
    i = RandomMole(0, 11);
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
        switch(moleType){
            case 0:
                score++;
                molesInfoPoints[0].innerText = "+ 1";
                break
            case 1:
                if(score > 0) {
                    score--;
                    molesInfoPoints[1].innerText = "- 1";
                }
                break
            case 2:
                if(score <= 4) score = 0;
                else {
                    score -= 5;
                    molesInfoPoints[2].innerText = "- 5";
                }
                break
            case 3:
                score += 3;
                molesInfoPoints[3].innerText = "+ 3";
                break
            case 4:
                score += 5;
                molesInfoPoints[4].innerText = "+ 5";
                break
        }
        scoreNumber.innerText = score;
    };
});

startGame.onclick = () => {
    const timer = setInterval(() => {
        timeLeft --;
        timerNumber.innerText = timeLeft;
    }, 1000);
    run();  
    startGame.style.display = "none";
};
