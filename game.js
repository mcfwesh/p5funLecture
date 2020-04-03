class Game {
  constructor() {
    /*     this.random = 0;
     */

    // this.background = new Background();

    // WE CREATE AN ARRAY SO WE CAN PUSH THE OBSTACLES RANDOMLY
    this.obstacles = [];
  }
  init() {
    this.background = new Background();
    this.player = new Player();
  }
  setup() {
    this.player.setup();
  }
  display() {
    clear();

    this.background.display();
    this.player.display();

    //CREATING ALL OF THE OBSTACLES EVERY 60 FRAMES
    if (frameCount % 60 === 0) {
      this.obstacles.push(new Obstacles());
    }
    //DISPLAYING ALL OF THE OBSTACLES
    this.obstacles.forEach((obstacle) => {
      obstacle.display();
    });

    //HERE WE WILL FILTER WHATEVER OBSTACLE COLLIDES WITH THE PLAYER
    this.obstacles = this.obstacles.filter((obstacle) => {
      //obstacle.checkCollision(this.player) RETURN EITHER TRUE (THERE IS A COLLISION) OR FALSE(NO COLLISION)
      //SO IF WE RETURN TRUE IN FILTER WE KEEP THE ELEMENT, IF WE RETURN FALSE WE FILTER THE OBSTACLE
      // SO WE NEED TO PUT "!" BEFORE obstacle.checkCollision(this.player); TO KEEP THE NON COLLIDING ELEMENTS
      return !obstacle.checkCollision(this.player);
    });
    // console.log(doesnotexist);
    // rect(100, 100, 100, 100);
  }
}
