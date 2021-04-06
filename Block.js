class Block{
   constructor(x,y,width,height){
      var options = {
       'restitution':0.4,
       'fricition':1

      }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;

       World.add(world,this.body);

   }
    display(){
        Push();
        var pos = this.body.position;
        rectMode(CENTER);
        fill(rgb(3,252,194));
        rect(pos.x,pos.y,this.width,this.height);

        pop();
    }

}