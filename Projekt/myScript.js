let christmasTime = new Date("12 24 2022").getTime();
let nowTime = new Date().getTime();

if (christmasTime > nowTime) {
  countDown();
} else {
  document.getElementById("timer").innerHTML = "Merry Christmas";
}

function countDown() {
  let timeRemaining = christmasTime - nowTime;

  const day = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hour = Math.floor(timeRemaining / (1000 * 60 * 60));
  const min = Math.floor(timeRemaining / (1000 * 60));
  const sec = Math.floor(timeRemaining / 1000);

  let hourPos = hour - day * 24;
  let minPos = min - hour * 60;
  let secPos = sec - min * 60;

  document.getElementById("timer").innerHTML =
    Math.floor(day) +
    " DAYS " +
    hourPos +
    " HOURS " +
    minPos +
    " MINUTES " +
    secPos +
    " SECONDS ";

  if ((day, hourPos, minPos, secPos == 0)) {
    document.getElementById("timer").innerHTML = "Merry Christmas";
  } else {
    countDown();
  }
}
