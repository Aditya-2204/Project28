class boy{
    constructor(x, y){
        var options={
            isStatic:true
        }
        this.image=loadImage("Plucking Mangoes/boy.png");
        this.x=x
        this.y=y
        World.add(this.image, World)
    }
    display(){
        strokeWeight(4)
        push();
        image(this.image, this.x, this.y, 170, 170)
        pop();
    }
}