const colorCodeContainer= document.getElementById("color-code");
const optionContainer = document.getElementById("options-container");
const ScoreContainer = document.getElementById("score");
let randomColor=null;
let score =0;

function generateRandomNumber(min,max){
   return min + Math.floor((Math.random())*(max-min)+1);
}

function generateRandomColor(){
  let red=generateRandomNumber(0,255);
  let blue=generateRandomNumber(0,255);
  let green=generateRandomNumber(0,255);
  return `rgb(${red}, ${green}, ${blue})`;
}
function incrementScore(){
  score++;
  ScoreContainer.innerText=score;
}
function ValidateResult(el){
  if(el.target.style.backgroundColor===randomColor){
    incrementScore();
  }
  else{
    score=0;
  }
  window.localStorage.setItem("score",score);
  startGame();
}
function startGame(){
    randomColor=generateRandomColor();
    score = Number(window.localStorage.getItem("score")) ?? 0;
    ScoreContainer.innerText = score;
    optionContainer.innerHTML = null;
    colorCodeContainer.innerText = randomColor;
    const ansIndex= generateRandomNumber(0,5);
    for( let i=0;i<6;i++){
        const div = document.createElement('div');
        div.addEventListener("click", ValidateResult)
        div.style.backgroundColor= i === ansIndex ? randomColor :generateRandomColor();
        optionContainer.append(div);
    }
}

window.addEventListener("load", ()=> startGame());
