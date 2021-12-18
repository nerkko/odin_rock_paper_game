// Simple Rock, Paper Scissors game.


// Setting global variables
var homan = 0;
var cat = 0;

// Pick an opponent
function pickOpponent(param = "oppCat1") {
  let opponent = param;
  showInfo(opponent);
}

function closeSplashScreen() {
  let closeBtn = document.querySelector(".splashScreen");
  closeBtn.classList.add("scroll_out");
}

function showInfo(x) {
  x = x.slice(x.length - 1);
  let oppNames = ["Cutty Catzi", "Curious Catzi", "Sleepy Catzi"];
  let oppName = oppNames[x];
  let oppInfoBox = document.createElement("div");
  document
    .querySelector(".dialog")
    .appendChild(oppInfoBox)
    .setAttribute("class", "oppInfoBox");
  let oppInfo = document.querySelector(".oppInfoBox");
  oppInfo.innerHTML = `
        <p>You have selected: </p>
        <p>${oppName}</p>
        <button onClick = "closeSplashScreen()">Let's play</button>
    `;
}

document.ready = function () {
  document.querySelector(".oppSelectDiv").classList.add("scroll_in_right");
};

function sendChoice(val, choice) {
  let userChoice = choice;
  let userVal = parseInt(val);
  const catChoices = ["2Paper", "3Scissors", "5Rock", "9Paw"];
  let rndCatChoice = catChoices[Math.floor(Math.random() * 4)];
  let catVal = parseInt(rndCatChoice[0]);
  let catChoice = rndCatChoice.slice(1);
  startGame(userVal, userChoice, catVal, catChoice);
}

let startGame = function compareChoices(uv, uc, cv, cc) {
  let result = 0;
  if(homan === 5 || cat === 5){
    alert(homan + " " + cat);
    document.getElementById('select-item').setAttribute("disabled","disabled");
  }

  output = `You selected ${uc}, kitty selected ${cc}!`;
  switch (true) {
    case uv === cv:
      result = 2;
      break;
    case uv + cv === 7:
      uv < cv ? (result = 1) : (result = 0);
      break;
    case uv > cv:
      result = 1;
      break;
  }
  throwOutput(result, output);
};

function throwOutput(x, m) {
  let outputLog = document.querySelector(".param"),
    tieMsg = ` A draw... no, my highnez don't agree`,
    winMsg = ` Meowz. I haz won!`,
    loseMsg = ` Lost, can't be... homan?`;

  if (x === 2) {
    m += tieMsg;
  } else if (x === 1) {
    m += loseMsg;
    homan++;
  } else {
    m += winMsg;
    cat++;
  }

  outputLog.innerHTML += m + "<br>";
  console.log("human has " + homan + " points");
  console.log("cat has " + cat + " points");
}
