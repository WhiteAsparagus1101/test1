let speed = 3;
let x = 0;

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );


document.addEventListener('DOMContentLoaded', () => {
    main();
    
});

function move() {
    let sc1 = document.getElementById("sc1");
    console.log(sc1.style.left);
    x += speed;
    if (x > 1000 || x < 0) {
        speed *= -1;
    }
    sc1.style.left = x + "px";
}

async function main(){
    while(true){
        move();
        await sleep(1);
    }
}