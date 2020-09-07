const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let particleArray = [];

// construtor function

class Particle{
    constructor(x,y,directionX,directionY ,size,color){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size , Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    // update() {
    //     if(this.x + this.size > canvas.width || this.x - this.size < 0){

    //     }   
    // }
    
}

const p1 = new Particle(100,100,0,0, 100, '#fff');
p1.draw();



