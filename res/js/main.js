const startGame = document.getElementById("startGame");
const scoreNumber = document.getElementById("scoreNumber");
const maxScoreNumber = document.getElementById("maxScoreNumber");
const timerNumber = document.getElementById("timerNumber");
const molesInfoPoints = document.getElementsByClassName("moleInfoPoints");
const moles = document.getElementsByClassName("mole");
const hammer = document.getElementById("hammer");

let score = 0;
let maxScore = 0;
let timeLeft = 30;
let moleType;
let moleType2;
let moleTypeIndex = false;
let moleIndex = false;
let i;
let i2;
let iIndex = false;
let timer;
let runInterval;
let soundInterval;


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
    const myMole = Math.floor(Math.random() * (maximum - minimum + 1 + minimum));
    return myMole;
};



const MoleFunction = () => {
    do {
        i2 = i;
        i = RandomMole(0, 11);
        if (i2 != i) {
            iIndex = true;
        }
    } while (!iIndex);
    do {
        moleType2 = moleType;
        moleType = RandomMole(0, 4);
        if (moleType2 != moleType) {
            moleIndex = true;
        }
    } while (!moleIndex);
    moles[i].style.backgroundImage = `url(./res/img/mole${moleType}.png)`;
    moles[i].style.animation = `moleIn 200ms forwards`;
    moleIndex = true;
};

function run() {
    MoleFunction();
    runInterval = setInterval(() => {
        moles[i].style.animation = `moleOut 200ms forwards`;
        moleIndex = false;
        
        MoleFunction();
    }, 700);
}

[...moles].forEach((mole) => {
    mole.onclick = () => {
        mole.style.animation = `moleOut 200ms forwards`;
        moleIndex = false;
        switch (moleType) {
            case 0:
                score++;
                molesInfoPoints[0].innerText = "+ 1";
                break;
            case 1:
                if (score > 0) {
                    score--;
                    molesInfoPoints[1].innerText = "- 1";
                }
                break;
            case 2:
                if (score <= 4) score = 0;
                else {
                    score -= 5;
                    molesInfoPoints[2].innerText = "- 5";
                }
                break;
            case 3:
                score += 3;
                molesInfoPoints[3].innerText = "+ 3";
                break;
            case 4:
                score += 5;
                molesInfoPoints[4].innerText = "+ 5";
                break;
        }
        scoreNumber.innerText = score;
    };
});
startGame.onclick = () => {
    timer = setInterval(() => {
        timeLeft--;
        timerNumber.innerText = timeLeft;
        if (timeLeft == 0) {
            clearInterval(timer);
            clearInterval(runInterval);
            if (moleIndex == true) {
                moles[i].style.animation = `moleOut 200ms forwards`;
            }
            if (score > maxScore) {
                maxScore = score;
                maxScoreNumber.innerText = maxScore;
            }
            startGame.style.display = "block";
            timeLeft = 30;
            timerNumber.innerText = timeLeft;
        }
    }, 1000);
    run();
    startGame.style.display = "none";
    score = 0;
    scoreNumber.innerText = score;
};
