var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;

// 공룡이 
//ctx.fillStyle = 'green';
//ctx.fillRect(10, 10, 100, 100);

var baa = {
    x:10,
    y:200,
    width:50,
    height:50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Fence{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var timer = 0;
var fences = [];
var jumpTimer = 0;

var jumpping = false;
document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        jumpping = true;
    }
}); 

// 프레임마다 실행할 것 
function comming() {
    requestAnimationFrame(comming);
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if(timer%240 === 0){
        var fence = new Fence();
        fences.push(fence);
    }

    fences.forEach((a, i, o)=>{
        // x 좌표가 0 미만이면 제거
        if(a.x<0){
            o.splice(i, 1)
        }
        a.x--;
        a.draw();
    });

    if(jumpping==true){
        baa.y-=3;
        jumpTimer++;
    }

    if(jumpping==false){
        if(baa.y < 200){
            baa.y+=3;
        }
    }

    if(jumpTimer > 50){
        jumpping = false;
        jumpTimer = 0;
    }
 
    baa.draw();
}
comming();

