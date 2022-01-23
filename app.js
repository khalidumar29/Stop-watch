let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;
let lapCounter = 1;
const audio = new Audio();
audio.src = "audio/sound_trim.mp3";
function start() {
  audio.play();
  if (!timer) {
    timer = true;
    document.getElementById("start").innerHTML =
      '<i class="far fa-pause-circle"></i> Pause';
    stopwatch();
    window.alert("Start Stop-watch");
  } else {
    timer = false;
    document.getElementById("start").innerHTML =
      '<i class="far fa-play-circle"></i> Start';
    window.alert("Stop Stop-watch");
  }
}

/*function stop() {
    timer = false

}
*/
function reset() {
  //hiding record container div
  document.getElementById("record-container").style.display = "none";

  audio.play();
  timer = false;
  document.getElementById("start").innerHTML =
    '<i class="far fa-play-circle"></i> Start';

  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";

  document.getElementById("record-table-body").innerHTML = "";
  lapCounter = 1;
}

let timeoutId;
function stopwatch() {
  clearTimeout(timeoutId);

  if (timer == true) count = count + 1;

  if (count == 99) {
    sec = sec + 1;
    count = 0;
  }
  if (sec == 59) {
    min = min + 1;
    sec = 0;
  }
  if (min == 59) {
    hr = hr + 1;
    min = 0;
    sec = 0;
  }

  let hrString = hr;
  let minString = min;
  let secString = sec;
  let countString = count;

  if (hr < 10) {
    hrString = "0" + hrString;
  }
  if (min < 10) {
    minString = "0" + minString;
  }
  if (sec < 10) {
    secString = "0" + secString;
  }
  if (count < 10) {
    countString = "0" + countString;
  }

  document.getElementById("hr").innerHTML = hrString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
  document.getElementById("count").innerHTML = countString;
  timeoutId = setTimeout("stopwatch()", 10);
}

function lap() {
  //displaying record container div
  document.getElementById("record-container").style.display = "block";

  audio.play();
  let lap_time =
    document.getElementById("hr").innerHTML +
    ":" +
    document.getElementById("min").innerHTML +
    ":" +
    document.getElementById("sec").innerHTML +
    ":" +
    document.getElementById("count").innerHTML;

  const table = document.getElementById("record-table-body");
  const row = table.insertRow(0);
  const no_cell = row.insertCell(0);
  const time_cell = row.insertCell(1);

  no_cell.innerHTML = lapCounter;
  time_cell.innerHTML = lap_time;

  lapCounter++;
}

function clearLap() {
  //hiding record container div
  document.getElementById("record-container").style.display = "none";

  audio.play();
  document.getElementById("record-table-body").innerHTML = "";
  lapCounter = 1;
}

let date;
setInterval(() => {
  date = new Date().toString();
  document.getElementById("d1").innerHTML = date;
}, 1000);
