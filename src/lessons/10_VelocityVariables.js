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

let cat;

function setup() {
    cat = new Sprite(resources['cat'].texture);
    cat.vx = 0;
    cat.vy = 0;
    game.stage.addChild(cat);
    game.ticker.add(gameLoop);
}

function gameLoop() {
    cat.vx = 1;
    cat.vy = 1;
    cat.x += cat.vx;
    cat.y += cat.vy;
}