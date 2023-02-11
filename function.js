const miliseg = document.querySelector(".milissegundos");
const seg = document.querySelector(".segundos");
const min = document.querySelector(".minutos");

let numMili = 0;
let numSeg = 0;
let numMin = 0;
let intervalo;

function milissegundos() {
  numMili++;
  if (numMili < 10) {
    miliseg.innerHTML = "0" + numMili;
  } else {
    miliseg.innerHTML = numMili;
  }
  if (numMili == 99) {
    numMili = 0;
    segundos();
  }
}
function segundos() {
  if (numSeg == 9) {
    alert("Tempo esgotado!!!");
  }

numSeg++;
if (numSeg < 10) {
  seg.innerHTML = "0" + numSeg;
} else {
  seg.innerHTML = numSeg;
}
if (numSeg == 59) {
  numSeg = 0;
  minutos();
}
}
function minutos() {
  numMin++;
  if (numMin < 10) {
    min.innerHTML = "0" + numMin;
  } else {
    min.innerHTML = numMin;
  }
}
function start() {
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    milissegundos();
  }, 10);
}
const stop = () => clearInterval(intervalo);

function reset() {
  clearInterval(intervalo);
  numMili = 0;
  numSeg = 0;
  numMin = 0;
  miliseg.innerHTML = "00";
  seg.innerHTML = "00";
  min.innerHTML = "00";
}
