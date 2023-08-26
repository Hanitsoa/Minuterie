const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const elementChrono = document.getElementById('display');

let elementMinute = 4;
let elementSeconde = 59;
elementChrono.textContent = "05 : 00";
stop.textContent = "";

btn1.addEventListener('click', () => {
    startChrono();
    bip ();
    play.textContent = "";
    stop.textContent = "STOP";
})

function bip () {
    const audio = new Audio();
                audio.src = "bip.mp3";
                audio.play();
}

function startChrono() {

    const chrono = setInterval(() => {
        if (elementMinute !== 0 || elementSeconde !== 0) {
            elementSeconde--;
            if (elementSeconde === -1) {
                elementMinute--;
                elementSeconde = 59;
            }
            if (elementMinute === 0 && elementSeconde === 0) {
                bip ();                
            } 

        } else {
            clearInterval(chrono);
            stop.textContent = "";
            play.textContent = "";
            }
        
        elementChrono.textContent = (elementSeconde < 10) ?
            `0${elementMinute} : 0${elementSeconde}` : ` 0${elementMinute} : ${elementSeconde}`;
        
    }, 1000);

    btn2.addEventListener('click', () => {
        console.log("OK");
        clearInterval(chrono);
        stop.textContent = "";
        play.textContent = "PLAY";
    });
}


