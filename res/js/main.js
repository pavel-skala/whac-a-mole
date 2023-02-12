const game = document.getElementById("game");
const startPage = document.getElementById("startPage");
const startGame = document.getElementById("startGame");

startGame.onclick = () => {
    startPage.style.display = "none";
    game.style.display = "flex";
}