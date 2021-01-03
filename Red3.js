class Red3 {
    constructor(x, y) {
        var options = {
            'restitution': 1,
            'friction': 0.5,
            'density':1,
            isStatic:true
        }
        this.r = 40;
        this.body = Bodies.circle(x, y, this.r, options);
       this.image=loadImage("images/player.png");
       
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};