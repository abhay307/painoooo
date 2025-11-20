let btn = document.querySelector(".card .lower button");
let h2 = document.querySelector(".lower h2");
let inner = document.querySelector(".inner");
let progress = 0;

btn.addEventListener("click", function () {
  let time = 30 + Math.floor(Math.random() * 50);
  console.log(time / 10, "seconds");
  btn.style.pointerEvents = "none";
  let stop = setInterval(() => {
    progress++;
    h2.innerHTML = progress + "%";
    inner.style.width = progress + "%";
  }, time);

  setTimeout(() => {
    clearInterval(stop);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = "0.5";
  }, time * 100);
});
