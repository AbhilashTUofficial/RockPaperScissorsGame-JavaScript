let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){

    const choice=["r","p","s"];
    const randNum=Math.floor(Math.random()*3);
    return choice[randNum];

};

function userWin(_userChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    document.getElementById(_userChoice).classList.add("green-glow");
    setTimeout(()=>document.getElementById(_userChoice).classList.remove("green-glow"),400)
    if(_userChoice==="r"){
        result_div.innerHTML="Rock broke the scissors, You win!";
    }else if(_userChoice==="p"){
        result_div.innerHTML="Paper covers the rock, You win!";
    }else{
        result_div.innerHTML="Scissors cuts the paper, You win!";
    }
}

function computerWin(_userChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    document.getElementById(_userChoice).classList.add("red-glow");
    setTimeout(()=>document.getElementById(_userChoice).classList.remove("red-glow"),400)
    if(_userChoice==="s"){
        result_div.innerHTML="Rock broke the scissors, You lost!";
    }else if(_userChoice==="r"){
        result_div.innerHTML="Paper covers the rock, You lost!";
    }else{
        result_div.innerHTML="Scissors cuts the paper, You lost!";
    }
}

function draw(_choice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    document.getElementById(_choice).classList.add("gray-glow");
    setTimeout(()=>document.getElementById(_choice).classList.remove("gray-glow"),400)
    if(_choice==="r"){
        result_div.innerHTML="Rock and rock, It's a draw!";
    }else if(_choice==="p"){
        result_div.innerHTML="Paper and paper, It's a draw!";
    }else{
        result_div.innerHTML="Scissors and scissors, It's a draw!";
    }
}

function game(userChoice){

    const computerChoice=getComputerChoice();
    console.log(userChoice+" : "+computerChoice)
    switch(userChoice+computerChoice){
        case "rs": 
        case "pr": 
        case "sp": 
            userWin(userChoice);
            break;

        case "rp": 
        case "ps": 
        case "sr": 
            computerWin(userChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(computerChoice);
            break;

    }
};

function main(){

    rock_div.addEventListener("click",function(){
        game("r");

    });
    
    paper_div.addEventListener("click",function(){
        game("p");

    });
    
    scissors_div.addEventListener("click",function(){
        game("s");

    });
};

main();
