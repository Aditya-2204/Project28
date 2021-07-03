class ground{
    constructor(x, y, width, height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x, y)
        this.w=width
        this.h=height
        World.add(this.body, World)
    }
    display(){
        push();
        strokeWeight(4);
        pop();
    }
}