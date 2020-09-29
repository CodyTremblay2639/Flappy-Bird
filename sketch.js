let birds = [];
let saveBirds = [];
let pipes = [];
let hscore = [];
let population = 200;
let gen = 0;

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < population; i++){
    birds[i] = new Bird();
  }
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  fill(255);
  for (var i = birds.length - 1; i >= 0; i--){
    birds[i].think(pipes);
    birds[i].show();
    birds[i].update();
    if (birds[i].death == true){
      saveBirds.push(birds.splice(i,1)[0]);
    }
  }
  for (var i = pipes.length - 1; i >= 0; i--){
    pipes[i].show();
    pipes[i].move();
    for (var j = birds.length - 1; j >= 0; j--){
      pipes[i].hit(birds[j]);
    }
    if(pipes[i].destroy){
      pipes.splice(i,1);
    }
  }// pipes
  if (birds.length == 0){
    nextGeneration();
  }
  fill(255);
  text("P: " + birds.length, 10, 32);
  text("G: " + gen, 10, 64);
  text("BS: " + birds[0].score, 10, 96);
}
