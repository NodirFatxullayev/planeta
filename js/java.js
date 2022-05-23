let sphera = document.querySelector(".sphera");
let vertikal = 0;
let horizontal = 0;

document.onkeydown = function(e) {
    if(e.keyCode === 38){
        ++vertikal;
    }
    if(e.keyCode === 40){
        --vertikal;
    }
    if(e.keyCode === 39){
        ++horizontal;
    }
    if(e.keyCode === 37){
        --horizontal;
    };
    console.log(vertikal);
    console.log(horizontal);

   sphera.style.transform = `rotateX(${vertikal}deg) rotateY(${horizontal}deg)`;
}