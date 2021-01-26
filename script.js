const dino = document.querySelector('.dino');
const principal = document.querySelector('.principal')
let inAir = false
let positionDino = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!inAir) {
            jump();
        }
    }
}

function jump() {
    
    inAir = true
   
    let upInterval = setInterval(() => {
        if (positionDino >= 150) {
            clearInterval(upInterval)

            let downInterval = setInterval(() => {
                if (positionDino <= 0) {
                    clearInterval(downInterval)
                    inAir = false
                } else {

                    positionDino -= 20;
                    dino.style.bottom = positionDino + 'px'
                }
            }, 28.1)
        } else {
            positionDino += 20

            dino.style.bottom = positionDino + 'px'
        }
    }, 28.1);
}

function createCactus() {
    const cactus = document.createElement('div');
    let position = 1000;
    let randomCacto = Math.random() * 4500;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    principal.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if (position <= -60) {
            clearInterval(leftInterval);
            principal.removeChild(cactus)
        } else if (position > 0 && position < 60 && positionDino < 60) {

            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="fim-de-jogo" > game over </h1>'
        }
        else {
            position -= 10;
            cactus.style.left = position + 'px';
        }
    }, 20)
    setTimeout(createCactus, randomCacto)
}



createCactus()
document.addEventListener('keyup', handleKeyUp)
