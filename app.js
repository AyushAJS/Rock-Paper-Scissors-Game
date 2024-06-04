let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const getComputerChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = ()=>{
    let btn = document.querySelector("#button")
    // btn.textContent = "Draw!";
    btn.innerHTML = "Draw!";
}

const displayWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win!");
        let btn = document.querySelector("#button")
         btn.textContent = `You Win! Your ${userChoice} beats ${compChoice}`;
         btn.style.color = "white";
         btn.style.height = "2.5vw"
         btn.style.width = "29vw"
         btn.style.background = "green";
         userScore++;
         let score = document.querySelector("#userScore");
         score.textContent = `${userScore}`;
    }
    else{
        console.log("You loose!");
        let btn = document.querySelector("#button")
         btn.textContent = `You loose! ${compChoice} beats  Your ${userChoice}`;
         btn.style.color = "white";
         btn.style.height = "2.5vw"
         btn.style.width = "30vw"
         btn.style.background = "red";
         computerScore++;
         let score = document.querySelector("#compScore");
         score.textContent = `${computerScore}`;
    }
}

const playGame = (userChoice)=>{
    console.log("user choice: ",userChoice);
    const compChoice = getComputerChoice();
    console.log("Computer choice: ",compChoice);

    if(compChoice !== userChoice){
            let userWin = true;
        if(userChoice === "rock"){
            // userWin = compChoice === "paper" ? false : true;
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === "paper"){
            // userWin = compChoice === "scissors" ? false : true;
            if(compChoice === "scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        displayWinner(userWin,userChoice,compChoice);
  } 
  else{
    drawGame();
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("class");
        playGame(userChoice);
    });
});