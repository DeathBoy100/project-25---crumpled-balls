class ball{    
    constructor(x,y,r){
      var options = {
          isStatic: false,
          friction: 0.5,
          density: 1.2,
          restitution: 0.1
      }
       this.body = Bodies.circle(x,y,r,options)
       World.add(world,this.body)
       this.radius = r
    }    
    display(){
        
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,this.radius,this.radius)
        
    }
    move(){
               
        Matter.Body.applyForce (this.body,this.body.position,{x:12,y:-13});
        
    }
   }