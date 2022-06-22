const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe-game");
const bigPipe = document.querySelector(".pipe-game-2");
const bullet = document.querySelector(".bullet");
const bulletTwo = document.querySelector(".bullet-2");
const bird = document.querySelector(".bird");
const clouds = document.querySelector(".cloud-game");
const enemy = document.querySelector(".enemy");
const smallJump = document.getElementById("mario-jump-small")
const marioTheme = document.querySelector("#mario-theme");


//game-over element
const gameOver = document.querySelector(".game-over");
const restart = document.querySelector(".restart");

const scoreElement = document.querySelector(".score-number");

const jump = () => {
    mario.classList.add("jump-mario");
    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500)
    smallJump.play();
};

let score = 0;

const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const bigPipePosition = bigPipe.offsetLeft;
    const bulletPosition = bullet.offsetLeft;
    const bulletTwoPosition = bulletTwo.offsetLeft;
    const birdPosition = bird.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const enemyPosition = enemy.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    console.log(marioPosition);
    //condicional para parar as animações - game over

    //bloco game over small pipe
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        //parando animações
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        bigPipe.style.animation = "none";
        bigPipe.style.left = `${bigPipePosition}px`;

        bullet.style.animation = "none";
        bullet.style.left = `${bulletPosition}px`;

        bulletTwo.style.animation = "none";
        bulletTwo.style.left = `${bulletTwoPosition}px`;

        bird.style.animation = "none";
        bird.style.left = `${birdPosition}px`;

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        enemy.style.animation = "none";
        enemy.style.left = `${enemyPosition}px`;

        //substituição do mario
        mario.src = "sources/img/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px"

        //display elements
        gameOver.style.display = "block";
        restart.style.display = "block";


        clearInterval(loopGame)
    }
    else if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 80 ){
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 190 && marioPosition < 195) {
            score += 5;
            scoreElement.innerHTML = score;
        }
    }

    //bloco game over big pipe
    else if (bigPipePosition <= 120 && bigPipePosition > 0 && marioPosition < 80) {

        //parando animações
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        bigPipe.style.animation = "none";
        bigPipe.style.left = `${bigPipePosition}px`;

        bullet.style.animation = "none";
        bullet.style.left = `${bulletPosition}px`;

        bulletTwo.style.animation = "none";
        bulletTwo.style.left = `${bulletTwoPosition}px`;

        bird.style.animation = "none";
        bird.style.left = `${birdPosition}px`;

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        enemy.style.animation = "none";
        enemy.style.left = `${enemyPosition}px`;

        //substituição do mario
        mario.src = "sources/img/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px"

        //display elements
        gameOver.style.display = "block";
        restart.style.display = "block";

        score += 10;
        scoreElement.innerHTML = score;
        
        clearInterval(loopGame)
    }
    else if (bigPipePosition <= 120 && bigPipePosition > 0 && marioPosition > 80 ){
        if (bigPipePosition <= 120 && bigPipePosition > 0 && marioPosition > 190 && marioPosition < 195) {
            score += 10;
            scoreElement.innerHTML = score;
        }
    }

    //bloco game-over inimigo
    else if (enemyPosition <= 120 && enemyPosition > 0 && marioPosition < 80) {

        //parando animações
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        bigPipe.style.animation = "none";
        bigPipe.style.left = `${bigPipePosition}px`;

        bullet.style.animation = "none";
        bullet.style.left = `${bulletPosition}px`;

        bulletTwo.style.animation = "none";
        bulletTwo.style.left = `${bulletTwoPosition}px`;

        bird.style.animation = "none";
        bird.style.left = `${birdPosition}px`;

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        enemy.style.animation = "none";
        enemy.style.left = `${enemyPosition}px`;

        //substituição do mario
        mario.src = "sources/img/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px"

        //display elements
        gameOver.style.display = "block";
        restart.style.display = "block";

        score += 1;
        scoreElement.innerHTML = score;
        
        clearInterval(loopGame)
    }
    else if (enemyPosition <= 120 && enemyPosition > 0 && marioPosition > 80 ){
        if (enemyPosition <= 120 && enemyPosition > 0 && marioPosition >= 190 && marioPosition < 195) {
            score += 1;
            scoreElement.innerHTML = score;
        }
    }

}, 15);

document.addEventListener("keydown", jump);

//audios
