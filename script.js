let score;
let scoreStr = localStorage.getItem("Score");

resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };
}

 function displayScore() {
  return `No of matches \n Won : ${score.win} \n Lost : ${score.lost} \n Tie : ${score.tie}`;
}
function numberGenerator() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return "Rock";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Paper";
  } else if (randomNumber > 2 && randomNumber <= 3) {
    return "Scissor";
  }
}
function winner(yourChoice, computerChoice) {
  if (yourChoice === computerChoice) {
    score.tie++;
    return "Tie";
  }
  if (yourChoice === "Rock" && computerChoice === "Paper") {
    score.lost++;
    return "You Lost";
  }
  if (yourChoice === "Rock" && computerChoice === "Scissor") {
    score.win++;
    return "You Won";
  }
  if (yourChoice === "Paper" && computerChoice === "Rock") {
    score.win++;
    return "You Won";
  }
  if (yourChoice === "Paper" && computerChoice === "Scissor") {
    score.lost++;
    return "You Lost";
  }
  if (yourChoice === "Scissor" && computerChoice === "Rock") {
    score.lost++;
    return "You Lost";
  }
  if (yourChoice === "Scissor" && computerChoice === "Paper") {
    score.win++;
    return "You Won";
  }
}

function showResult(userMove, compMove, result) {
  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector('#user-move').innerText='You have choosen ' + userMove;
  document.querySelector('#computer-move').innerText='Computer choice is ' + compMove;
  document.querySelector('#result').innerText='Result : ' + result;
  document.querySelector('#score').innerText = displayScore();

}
