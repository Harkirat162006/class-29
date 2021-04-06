class Block2{
    constructor(x,y,width,height){
       var options = {
        'restitution':0.4,
        'fricition':1.0
 
       }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visibility=255
        World.add(world,this.body);
 
    }
     display(){
         Push();
         var pos = this.body.position;
         rectMode(CENTER);
         fill(rgb(240,128,129));
         rect(pos.x,pos.y,this.width,this.height);
 
         pop();
     }
 
 }