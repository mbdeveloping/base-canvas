import { greet } from './module';
import '../sass/style.scss';
let canvas;
let ctx;
let canvasWidth = 800;
let canvasHeight = 400;

console.log('Hello from index!');
console.log(greet('Hello'));


function setup() {
     canvas = document.createElement('canvas');
     document.getElementById('body').appendChild(canvas);
     canvas.width = canvasWidth;
     canvas.height = canvasHeight;
     ctx = canvas.getContext('2d');
}

function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    //Background
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

setup();
draw();