import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Sprite = PIXI.Sprite;

const Game = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

const loader = Game.loader,
    resources = Game.loader.resources;

document.body.appendChild(Game.view);

loader
    .add('cat', '../assets/cat.png')
    .load(setup);

function setup() {
    const cat = new Sprite(resources['cat'].texture);

    cat.x = 120;
    cat.y = 120;
    // cat.position.set(120, 120);

    cat.width = 80;
    cat.height = 120;

    cat.anchor.x = 0.5;
    cat.anchor.y = 0.5;
    // cat.anchor.set(0.5, 0.5);

    cat.rotation = 0.3;
    
    // cat.scale.set(1.5, 3);

    Game.stage.addChild(cat);
}