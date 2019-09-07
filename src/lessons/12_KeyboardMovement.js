/* eslint-disable indent */
import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Sprite = PIXI.Sprite,
    Loader = new PIXI.Loader(),
    resources = Loader.resources;

const game = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

document.body.appendChild(game.view);

Loader
    .add('cat', '../assets/cat.png')
    .load(setup);

let cat, state;

function setup() {
    cat = new Sprite(resources['cat'].texture);
    cat.y = 96;
    cat.vx = 0;
    cat.vy = 0;
    game.stage.addChild(cat);

    state = play;

    game.ticker.add(gameLoop);

    window.addEventListener('keydown', onKeyDownEvent);
    window.addEventListener('keyup', onKeyUpEvent);
}

function gameLoop(delta) {
    state(delta);
}

function play() {
    cat.x += cat.vx;
    cat.y += cat.vy;
}

function onKeyDownEvent(e) {
    switch (e.keyCode) {
        case 37:
            cat.vx = -5;
            break;
        case 38:
            cat.vy = -5;
            break;
        case 39:
            cat.vx = 5;
            break;
        case 40:
            cat.vy = 5;
            break;
    }
}

function onKeyUpEvent(e) {
    switch (e.keyCode) {
        case 37:
        case 39:
            cat.vx = 0;
            break;
        case 38:
        case 40:
            cat.vy = 0;
            break;
    }
}