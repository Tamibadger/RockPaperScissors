function getComputerChoice(){
    let randomNumber=(Math.round(Math.random()*2));
    let computerInput= "";
    switch(randomNumber){
        case 0:
            computerInput="Rock";
            break;
        case 1:
            computerInput="Paper";
            break;
        case 2:
            computerInput="Scissors";
            break;        

    }
    return(computerInput);
}
function caseInsensitive(str){
    const capitalized = str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();

    return capitalized;
}

function playRound(playerSelection,computerSelection){
    switch(playerSelection){
        case "Rock":
            if(computerSelection=="Rock"){
                return("Tie");
            }
            else if(computerSelection==="Paper"){
                return("Lose Rock");
            }
            else if (computerSelection==="Scissors"){
                return("Win Rock");
            }
            break;
        case "Paper":
            if(computerSelection==="Rock"){
                return("Win Paper");
            }
            else if(computerSelection==="Paper"){
                return("Tie");
            }
            else if (computerSelection==="Scissors"){
                return("Lose Paper");
            }
            break;
         case "Scissors":
            if(computerSelection==="Rock"){
                return("Lose Scissors");
            }
            else if(computerSelection==="Paper"){
                return("Win Scissors");
            }
            else if (computerSelection==="Scissors"){
                return("Tie");
            }
            break;    
}
}
function game(){
let playerScore=0;
let computerScore=0;

for (let i=0; i<5; i++){
    const computerSelection= getComputerChoice();
    const playerInput= prompt("Please choose Rock,Paper or Scissors");
    const playerSelection=caseInsensitive(playerInput);
    console.log("Computer chose "+computerSelection);
    console.log("You chose "+playerSelection);
    switch(playRound(playerSelection,computerSelection)) {
        case "Tie":
            console.log("You tied this round!");
            break;
        case "Lose Rock":
            console.log("You lose this round! Paper beats rock");
            computerScore++;
            break;
        case "Win Rock":
            console.log("You win this round! Rock beats scissors");
            playerScore++;
            break;
        case "Lose Paper":
            console.log("You lose this round! Scissors beats paper");
            computerScore++;
            break;
        case "Win Paper":
            console.log("You win this round! Paper beats rock");
            playerScore++;
            break;
         case "Lose Scissors":
            console.log("You lose this round! Rock beats Scissors");
            computerScore++;
            break;
        case "Win Scissors":
            console.log("You win this round! Scissors beats paper");
            playerScore++;
            break;
    }
}

console.log("Player's score: "+playerScore+"     Computer's score:"+computerScore);
if(playerScore>computerScore){
    console.log("You won, congratz!");
}
else if(computerScore>playerScore){
    console.log("You lost, better luck next time!");
}
else{
    console.log("That's a tie, try again to see who wins!");
}

}

game();