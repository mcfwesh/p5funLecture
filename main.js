let game = new Game();
function preload() {
  //let newImg = loadImage("assets/background/plx-2.png");
  game.init();
  /*  console.log(game);
  console.log("Hello"); */
}
function setup() {
  createCanvas(384, 216);
  game.setup();
  /*  console.log(game.random); */
}
function draw() {
  frameRate(40);
  game.display();
  /*   console.log(game.random);
   */
}

//
function keyPressed() {
  let spaceBarCode = 32;
  if (keyCode === spaceBarCode) {
    game.player.jump();
    console.log("please jump");
  }
}
