var number = 0;

document.getElementById("clicks").innerHTML = localStorage.clicks;

function clickCounter() {
  if (localStorage.hasOwnProperty("clicks")) {
    localStorage.clicks = Number(localStorage.clicks) + 1;
  } else {
    localStorage.clicks = 0;
  }
  document.getElementById("clicks").innerHTML = localStorage.clicks;
}
