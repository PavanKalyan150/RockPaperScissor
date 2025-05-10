const choices=['Rock','Paper','Scissor'];
const playerchoice=document.getElementById('playerChoice');
const compterchoice=document.getElementById('computerChoice');
const resultDisplay=document.getElementById('resultDisplay');
const playerscore=document.getElementById('playerscore');
const compterscore=document.getElementById('computerscore');
let playerCount=0;
let computerCount=0;


function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice==computerChoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case 'Rock':
                (computerChoice=='Paper')?result="AI WIN!":result="YOU WIN!";
                break;
            case 'Paper':
                (computerChoice=='Scissor')?result="AI WIN!":result="YOU WIN!";
                break;
            case 'Scissor':
                (computerChoice=='Rock')?result="AI WIN!":result="YOU WIN!";
                break;
        }
    }
    playerchoice.innerHTML='Player :'+playerChoice;
    compterchoice.innerHTML='AI :'+computerChoice;
    resultDisplay.innerHTML=''+result;

    resultDisplay.classList.remove('greentext','redtext');
    switch(result){
        case 'YOU WIN!':
            resultDisplay.classList.add('greentext');
            playerCount++;
            playerscore.innerHTML=playerCount;
            break;
        case 'AI WIN!':
            resultDisplay.classList.add('redtext');
            computerCount++;
            compterscore.innerHTML=computerCount;
            break;
    }
}