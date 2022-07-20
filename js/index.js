window.onload = function () {
  let seconds = 00;
  let tens = 00;
  let runningSeconds = document.getElementById('seconds');
  let runningTens = document.getElementById('tens');
  const btnStart = document.getElementById('button-start');
  const btnStop = document.getElementById('button-stop');
  const btnReset = document.getElementById('button-reset');
  let interval;

  btnStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  }

  btnStop.onclick = function () {
    clearInterval(interval);
  }

  btnReset.onclick = function () {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    runningSeconds.innerHTML = seconds;
    runningTens.innerHTML = tens;
  }

  function startTimer() {
    tens++;
    if (tens <= 9) {
      runningTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
      runningTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      runningSeconds.innerHTML = '0' + seconds;
      tens = 0;
      runningTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
      runningSeconds.innerHTML = seconds;
    }
  }
};
