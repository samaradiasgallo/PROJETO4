let palavra;

function setup() {
  createCanvas(600, 600);
  palavra = empada();
}

function draw() {
  batata();
  coxinha();
  empada();
}

function batata(){
  background("violet");
  fill("lightblue");
  textSize(70);
  textAlign(CENTER,CENTER);
}

function coxinha(){
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300, 300);
}

function empada(){
  let palavras = ["coxinha", "batata", "vô nada", "empada", "isabelle"];
return random(palavras);
}
