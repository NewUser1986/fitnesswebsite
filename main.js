function sleep() {
  i++;
  if (i > 2) {
    i = 0;
    ar = makeText();
  }
  proba.innerHTML = "";
  start();
}

function makeText() {
  const text = "Naši programi";
  const text1 = "Bojović official";
  const text2 = "Krenimo sa vežbanjem";

  const stext = text.split("");
  const stext1 = text1.split("");
  const stext2 = text2.split("");
  const nasArray = [stext, stext1, stext2];
  return nasArray;
}

let ar = makeText();
let proba = document.getElementById("proba");
let loop;
let i = 0;

function start() {
  if (ar[i].length > 0) {
    proba.innerHTML += ar[i].shift();
    loop = setTimeout(start, 200);
  } else {
    const ss = setTimeout(sleep, 1000);
  }
}

start();

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
  });
