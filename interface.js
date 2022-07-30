document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {

            alert("O Jogo Acabou - O Vencedor Foi o Jogador " + playerTime)
        }, 15)
    };

    updateSquares(position);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

let button = document.getElementsByClassName("restart")[0];
button.addEventListener("click", restart);

function restart() {

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }

}