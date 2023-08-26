const dino = document.getElementById('dino');

const cactus = document.getElementById('cactus');

const jump = ()=>{
    if(dino.classList != 'jump'){
        dino.classList.add('jump');

        setTimeout(function(){
            dino.classList.remove('jump');
        },300)
    }
}




let isALive = setInterval(function (){

    //get current dino Y position 
    
    // console.log('check');

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    // console.log(dinoTop);

    //get current cactus X position 
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    // console.log(cactusLeft);


    //detect collision 
    if(cactusLeft <50 && cactusLeft > 0 && dinoTop>=140){
        //collision

        // console.log('collision');
        alert("Game Over Buddy!")
    }







},10)







document.addEventListener('keydown',function(event){
    jump();
});