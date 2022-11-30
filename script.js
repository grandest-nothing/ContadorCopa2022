const appendMins = document.querySelector(".mins");
const appendSeconds = document.querySelector(".seconds");
const timeUm = document.querySelector(".time1");
const timeDois = document.querySelector(".time2");
const buttonStart = document.querySelector(".button-start");
const buttonStop = document.querySelector(".button-stop");
const buttonReset = document.querySelector(".button-reset");
const playerUmMenos = document.querySelector(".p1-prev");
const playerUmMais = document.querySelector(".p1-next");
const playerDoisMenos = document.querySelector(".p2-prev");
const playerDoisMais = document.querySelector(".p2-next");

var seconds = 00;
var mins = 00;
var tens = 00;
var interval;
var playerUm = 0;
var playerDois = 0;

buttonStart.onclick = function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
};
buttonStop.onclick = function () {
  clearInterval(interval);
};
buttonReset.onclick = function () {
  clearInterval(interval);
  seconds = "00";
  minutes = "00";

  appendSeconds.innerHTML = seconds;
  appendMins.innerHTML = minutes;
};
function startTimer() {
  tens++;
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
  }
  if (seconds > 9 && seconds <= 59) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    console.log("minutes");
    minutes++;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
    if (minutes <= 9) {
      appendMins.innerHTML = "0" + minutes;
    }
    if (minutes > 9) {
      appendMins.innerHTML = minutes;
    }
  }
}

playerUmMenos.addEventListener("click", () => {
  if (playerUm > 0) {
    playerUm -= 1;
    timeUm.innerHTML = playerUm;
  } else if (playerUm <= 0) {
    timeUm.innerHTML = "0";
  }
});
playerUmMais.addEventListener("click", () => {
  playerUm += 1;
  timeUm.innerHTML = playerUm;
});

playerDoisMenos.addEventListener("click", () => {
  if (playerDois > 0) {
    playerDois -= 1;
    timeDois.innerHTML = playerDois;
  } else if (playerDois <= 0) {
    timeDois.innerHTML = "0";
  }
});
playerDoisMais.addEventListener("click", () => {
  playerDois += 1;
  timeDois.innerHTML = playerDois;
});
