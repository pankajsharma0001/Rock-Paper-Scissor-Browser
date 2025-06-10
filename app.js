let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userS = document.querySelector("#user-score");
const compS = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin) =>{
    if(userWin){
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        userScore++;
        userS.innerText = userScore;
    }else{
        msg.innerText = "Computer win!";
        msg.style.backgroundColor = "red";
        compScore++;
        compS.innerText = compScore
    }
}

const drawGame = () => {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})