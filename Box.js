class Box
{
    constructor(x,y,width,height){
        var options={
            restitution:0.2
           }
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    } 
display(){
    
    var pose=this.body.position;
   var angle=this.body.angle;
  console.log(angle);

  push();
translate(pose.x,pose.y)
  rotate(angle)
  fill("cyan")
   rectMode(CENTER)
     rect(0,0,this.width,this.height);
 pop();
}

}