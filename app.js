let a = new Audio("./audio/28.mp3");
let s = new Audio("./audio/29.mp3");
let d = new Audio("./audio/30.mp3");
let f = new Audio("./audio/31.mp3");
let g = new Audio("./audio/32.mp3");
let h = new Audio("./audio/33.mp3");
let j = new Audio("./audio/34.mp3");
let k = new Audio("./audio/35.mp3");
let l = new Audio("./audio/36.mp3");

document.body.addEventListener("keypress", function (e) {
  if (e.key === "a") a.play();
  else if (e.key === "s") s.play();
  else if (e.key === "d") d.play();
  else if (e.key === "f") f.play();
  else if (e.key === "g") g.play();
  else if (e.key === "h") h.play();
  else if (e.key === "j") j.play();
  else if (e.key === "k") k.play();
  else if (e.key === "l") l.play();
});
