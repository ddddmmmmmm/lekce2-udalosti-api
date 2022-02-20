// tady je místo pro náš program


// úkol v hodině - vyřešeno v hodině 
function setBold(element) {
    element.style.fontWeight = "bold";
}

function setNormal(element) {
    element.style.fontWeight = "normal";
}


// úkol č. 1 - jak po dalším kliknutí vrátit na původní barvu textu ?? 
function upravBarvuPisma() {
    let odstavec = document.querySelector('p');
    odstavec.style.color = 'red';

}

//  úkol č. 2 - využito řešení z 1. lekce
function upravVelikostPisma() {
    let odstavec = document.querySelector('p');
    let computedSize = window.getComputedStyle(odstavec, null).getPropertyValue('font-size');
    odstavec.style.fontSize = (parseFloat(computedSize) + 1) + 'px';

}

// úkol č. 3

function startAudio() {
    let audioFile = document.getElementById('zvuk');
    audioFile.play();
}

function pauzaAudio() {
    let audioFile = document.getElementById('zvuk');
    audioFile.pause();
}

function ztisitAudio() {
    let audioFile = document.getElementById('zvuk');
    audioFile.volume = 0;
}

function akoratAudio() {
    let audioFile = document.getElementById('zvuk');
    audioFile.volume = 0.5;
}

function maximumAudio() {
    let audioFile = document.getElementById('zvuk');
    audioFile.volume = 1;
}

function zacatekAudio() {
    let audioFile = document.getElementById('zvuk');
    audioFile.currentTime = 0;
}