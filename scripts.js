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
    console.log(computerInput);
}
getComputerChoice();