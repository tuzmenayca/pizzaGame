function preload(){
  img1 = loadImage('background.png');
}

let button;

function setup() {
  createCanvas(680, 400);
 let col = color(0,144,188);
  image(img1, 0, 0, 680, 400);
  text('Dominoes Toddler Learning Environment', 230, 50);
  button1 = createButton("Cutting");
  button1.position(100, 300);
  button1.style('background-color', "red");
  button2 = createButton("Drawing");
  button2.position(307, 300);
  button3 = createButton("Cleaning");
  button3.position(500, 300);
  button3.style('background-color', col);
  button1.mousePressed(goToC);
  button2.mousePressed(goToD);
  button3.mousePressed(goToCl);

}
function goToC(){
window.open("https://editor.p5js.org/SabineSavage/full/G7tAXFqfC", "_self");
}

function goToD(){
window.open("https://editor.p5js.org/SabineSavage/full/kyIytxyEw", "_self");
}

function goToCl(){
window.open("https://test1.aycatuzmen.repl.co", "_self");
}

function draw() {
}

