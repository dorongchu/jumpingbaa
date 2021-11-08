const baa = document.getElementById("baa");
const fence = document.getElementById("fence");
let score = 0;

function jump() {
    // 3초 안에 두번 점프하면 initiate 되지 않도록 
    if(baa.classList!="jump"){
        baa.classList.add("jump");
    
        // 3초 뒤 jump 클래스 제거 
        setTimeout(function(){
            baa.classList.remove("jump");
        },500);
    }
}

let isAlive = setInterval(function(){
    score++;

    let baaLeft = parseInt(window.getComputedStyle(baa).getPropertyValue("left"));
    let baaTop = parseInt(window.getComputedStyle(baa).getPropertyValue("top"));
    let fenceTop = parseInt(window.getComputedStyle(fence).getPropertyValue("top"));
    let fenceLeft = parseInt(window.getComputedStyle(fence).getPropertyValue("left"));

    let diffX = fenceLeft-(baaLeft);
    let diffY = fenceTop-(baaTop+50);

    //direct collision
    if(diffX<0 && diffY<0){
        // console.log("collision");
        alert("Game Over!! Score = " + score);
        score = 0;
        window.getComputedStyle(fence).setPropertyValue("left", 600);
    }
});

document.addEventListener("keydown", function(event){
    jump();
});