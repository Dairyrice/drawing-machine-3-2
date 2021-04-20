let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);


}

function draw() {

  background(220, 5);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;



  if (mouseIsPressed ==true){
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png' )
  } else if (key === 'c'){
    clear();
  }

  return false;
}
