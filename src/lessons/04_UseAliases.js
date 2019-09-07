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
    // const cat = new PIXI.Sprite(PIXI.utils.TextureCache['../assets/cat.png']);
    Game.stage.addChild(cat);
}