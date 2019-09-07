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
    cat.y = 96;
    game.stage.addChild(cat);
    game.ticker.add(gameLoop);
}

function gameLoop(delta) {
    // console.log(delta);
    cat.x = cat.x > game.stage.width + cat.width * 3 ? 0 : cat.x + 1 + delta;
}