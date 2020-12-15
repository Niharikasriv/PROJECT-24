class Dustbin{
        constructor(x, y, height) {
          var options = {
              'restitution':0.8,
              'friction':1,
              'density':1.0
          }
          this.body = Bodies.rectangle(x, y, 110,height, options);
          this.width = 110;
          this.height = height;
          
          
        }
        display(){
          var pos =this.body.position;
         
         
         
          push();
          translate(pos.x, pos.y);
          
          rectMode(CENTER);
      
          strokeWeight(4);
          stroke("pink");
          fill(255);
          rect(0, 0, this.width, this.height);
          pop();
        }
      };
      
