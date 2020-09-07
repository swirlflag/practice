// 캔버스 셋팅
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

const numberOfParticle = 200;

// 마우스 포지션 잡기
const mouse = {
    x : null,
    y : null,
};

window.addEventListener('mousemove' , (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// setInterval(() => {
//     mouse.x = null;
//     mouse.y = null;
// },200);

// 파티클 만들기

class Particle {
    constructor(x,y,size,color, weight){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight;
    };
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    };
    update() {
        this.size -= 0.1;

        if(this.size < 0){
            this.x = (mouse.x + (Math.random() *20) -10);
            this.y = (mouse.y + (Math.random() *20) -10);
            this.size = (Math.random() * 15) + 2;
            this.weight = (Math.random() * 2) - 0.5;
        };
        this.y += this.weight;
        this.weight += 0.4;

        if(this.y > canvas.height - this.size){
            this.weight *= -0.8;
        };
    };
}

function init() {
    particleArray = [];
    for(let i = 0; i < numberOfParticle; ++i){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = (Math.random() * 5 )+ 2
        let color = 'lime';
        let weight = 1;
        const particle = new Particle(x,y,size,color,weight);
        particleArray.push(particle);
    };
};

function animate(){
    // ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    for(let i = 0; i < particleArray.length; ++i){
        particleArray[i].update();
        particleArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();