'use strict';

// KONSTANTEN / VARIABLEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.main = document.querySelector ( 'main')
}

const appendEventlisteners = () => {

}

const fillDOM = () => {
    let el = document.createElement('h1');
    el.innerHTML = 'Hallo Weltttttttttt'
    elements.main.append(el)
}

const init = () => {
    domMapping();
    appendEventlisteners();
    fillDOM();
}

// INIT
init();