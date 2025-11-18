let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("mousemove", function () {
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let r1 = Math.random() * 360;
  let div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  div.style.position = "absolute";
  div.style.top = y + "%";
  div.style.left = x + "%";
  div.style.rotate = r1 + "deg";
  main.appendChild(div);
});
