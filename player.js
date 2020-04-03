class Player {
  constructor() {
    this.img = loadImage("assets/player/run.gif");
    this.gravity = 0.2;
    this.speed = 0;
  }
  setup() {
    this.height = this.img.height;
    console.log(this.height);
    this.width = this.img.width;
    this.x = 50;
    /*     this.y = height - this.height;

 */

    this.y = 100;
  }
  jump() {
    // THIS FUNCTION IS BEING CALLED WHENEVER WE PRESSED THE SPACEBAR CHECK IN THE main.js inside of the function keyPressed(){}

    //HERE WE SET THIS.SPEED TO A NEGATIVE NUMBER WHICH WILL MOVE THE PLAYER UP
    this.speed = -5;
  }
  display() {
    //
    // console.log("gravity", this.gravity);
    //console.log("velocity!", this.speed);
    //IF this.speed IS A POSITIVE NUMBER THE PLAYER WILL GO DOWN, AND THE HIGHER THE SPEED THE QUICKER THE USER WILL GO DOWN

    // this.speed IS INCREASING BY 0.2 THANKS TO this.gravity
    this.speed += this.gravity;

    //HERE WE ARE CHANGING this.y BASED ON THE VALUE OF THIS.SPEED
    this.y += this.speed;

    /*  if (frameCount % 30 === 0) {
      this.speed = this.speed * -1;
    }
 */

    // HERE WE MAKE SURE THAT WHEN THE PLAYER TOUCHES THE FLOOR IT DOESNT GO DOWN ANYMORE
    if (this.y > height - this.height) {
      this.y = height - this.height;
    }
    image(this.img, this.x, this.y);
  }
}
