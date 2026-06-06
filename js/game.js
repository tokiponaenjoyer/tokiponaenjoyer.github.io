const params = new URLSearchParams(window.location.search);
const game = params.get('game');
const name = params.get('name') || game || 'Game';

const iframe = document.querySelector('main > div.block > iframe');
const h1 = document.querySelector('main > div.block > h1');

if (game && iframe) {
    iframe.src = `../games/${game}.html`;
}

if (h1) {
    h1.textContent = name;
}