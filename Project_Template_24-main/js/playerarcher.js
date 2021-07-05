class  PlayerArcher {
    constructor(x, y, width, height, archerAngle) {
      var options = {
         
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/ playerArcher.png");
      World.add(world, this.body);
      Matter.Body.setAngle(this.body,-PI/2)
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      if(move === "UP" && computerArcher.body.angle < 1.77){
        angleValue=0.1;
        }else{
          angleValue= -0.1;
        }

        if(move === "DOWN" && computerArcher.body.angle > 1.47){
          angleValue= -0.1;
          }else{
            angleValue= 0.1;
          }

  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

   }
   }
