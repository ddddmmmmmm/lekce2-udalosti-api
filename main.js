// tady je místo pro náš program



function setBold(element) {
    element.style.fontWeight = "bold";
}

function setNormal(element) {
    element.style.fontWeight = "normal";
}



function upravBarvuPisma() {
    let odstavec = document.querySelector('p');
    odstavec.style.color = 'red';

}

function upravVelikostPisma() {
    let odstavec = document.querySelector('p');
    let computedSize = window.getComputedStyle(odstavec, null).getPropertyValue('font-size');
    odstavec.style.fontSize = (parseFloat(computedSize) + 1) + 'px';

}





