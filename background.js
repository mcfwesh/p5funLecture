class Background {
  constructor() {
    this.random = 0;
    this.imgs = [
      { src: loadImage("assets/background/plx-1.png"), x: 0, speed: 0 },
      { src: loadImage("assets/background/plx-2.png"), x: 0, speed: 1 },
      { src: loadImage("assets/background/plx-3.png"), x: 0, speed: 2 },
      { src: loadImage("assets/background/plx-4.png"), x: 0, speed: 3 },

      { src: loadImage("assets/background/plx-5.png"), x: 0, speed: 4 }
    ];
  }
  move(img) {
    img.x -= img.speed;

    // image(we get the source of image, x coordinate, y coordinate )
    image(img.src, img.x, 0);
    image(img.src, img.x + width, 0);
    if (img.x <= -width) {
      img.x = 0;
    }
  }
  display() {
    /*    image(this.imgs[1].src, 0, 0);
    image(this.imgs[2].src, 0, 0);
    image(this.imgs[3].src, 0, 0);
    image(this.imgs[4].src, 0, 0);
 */
    /*     console.log(width, height);

    //looping over the images array to move all of them
    for (let i = 0; i < this.imgs.length; i++) {

        // MOVING EACH ELEMENT AT THE ELEMENTS SPEED
      this.imgs[i].x -= this.imgs[i].speed; 

      // WE HAVE TO IMAGES TO CREATE A INFINITE IMAGE MOVING
      //THIS IMAGE APPEARS AT THE BEGINNING
      image(this.imgs[i].src, this.imgs[i].x, 0);
      THIS ONE APPEARS ONCE THE FIRST ONE IS OUT OF THE CANVAS
      image(this.imgs[i].src, this.imgs[i].x + width, 0);

      // WE USE THIS TO SET THE BACKGROUND AND PUT IT BACK AT THE BEGINNING ONCE IS OUT OF THE CANVAS

      if (this.imgs[i].x <= -width) {
        this.imgs[i].x = 0;
        console.log("outside of the grid");
      }
    }
 */
    this.imgs.forEach(image => {
      this.move(image);
    });
  }
}
