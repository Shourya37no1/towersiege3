class Box{
    constructor(x,y,width,height){
        var options={
            isStatic : false,
            restitution : 0.8
        }
    this.Visibility
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    score(){
        if(this.Visibility<0&&this.Visibility>-100){
score++
        }
    }

    display(){
        if (this.body.speed < 5){
            var pos = this.body.position;
            var angle= this.body.angle
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            fill("blue");
       rectMode(CENTER)

	rect(0, 0, this.width, this.height);
    pop()
        }
      else
    {
    World.remove(world, this.body);
     push();
     this.Visibility = this.Visibility - 5;
     //tint(255,this.Visibility);
    // rectangle(this.position.x, this.position.y, this.width, this.height);
     pop();
    }  
}

    
}