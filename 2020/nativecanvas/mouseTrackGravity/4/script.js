// 캔버스 셋팅
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

const numberOfParticle = 100;

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
let myHue = 0;
let myColor = `pink`;

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
        // ctx.rect(this.x, this.y, this.size,this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
    };
    update() {
        this.size -= 0.1;

        if(this.size < 0){
            this.x = (mouse.x + (Math.random() *20) -10);
            this.y = (mouse.y + (Math.random() *20) -10);
            this.size = (Math.random() * 5) + 5;
            this.weight = (Math.random() * 2) - 0.5;
            this.color = myColor;
        };
        this.y += this.weight;
        this.weight += 0.2;

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
        // let color = 'orange';
        let color = myColor;
        let weight = 1;
        const particle = new Particle(x,y,size,color,weight);
        particleArray.push(particle);
    };
};

let n = 0;
let nn = 1;


const connect = () => {
    let opacityValue = 1;
    const distanceLimit = 18000    ;
    for(let a = 0; a < particleArray.length; ++a){
        for(let b = a; b < particleArray.length; ++b){
            let distance =  ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x)) + 
                            ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y))
            ;
            
            if(distance < distanceLimit){
                opacityValue = 1 - (distance/(distanceLimit*0.7));
                ctx.strokeStyle = `rgba(255,255,255,${opacityValue})`;
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.moveTo(particleArray[a].x , particleArray[a].y);
                ctx.lineTo(particleArray[b].x , particleArray[b].y);
                ctx.stroke();
            };
        };
    };
};

function animate(){
    
    if(Math.round(n%nn === 0)){
    
        ctx.clearRect(0,0,canvas.width, canvas.height);

        // ctx.fillStyle = "rgba(0,0,0,0)";
        // ctx.fillRect(0,0,canvas.width, canvas.height);

        for(let i = 0; i < particleArray.length; ++i){
            particleArray[i].update();
            // particleArray[i].draw();
        }
    }
    connect();

    requestAnimationFrame(animate,++n);

}

init();
animate();
