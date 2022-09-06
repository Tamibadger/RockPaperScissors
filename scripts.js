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

const computerSelection= getComputerChoice();
const playerSelection= prompt("Please choose Rock,Paper or Scissors");

function playRound(playerSelection,computerSelection){
    switch(playerSelection){
        case "Rock":
            if(computerSelection==="Rock"){
                return("That's a tie, go again!");
            }
            else if(computerSelection==="Paper"){
                return("You lose! Paper beats rock");
            }
            else if (computerSelection==="Scissors"){
                return("You win! Rock beats scissors");
            }
            break;
        case "Paper":
            if(computerSelection==="Rock"){
                return("You win! Paper beats rock");
            }
            else if(computerSelection==="Paper"){
                return("That's a tie, go again!");
            }
            else if (computerSelection==="Scissors"){
                return("You lose! Paper beats rock");
            }
            break;
         case "Scissors":
            if(computerSelection==="Rock"){
                return("You lose! Rock beats scissors");
            }
            else if(computerSelection==="Paper"){
                return("You win! Scissors beats paper");
            }
            else if (computerSelection==="Scissors"){
                return("That's a tie, go again");
            }
            break;    
}
}

console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));