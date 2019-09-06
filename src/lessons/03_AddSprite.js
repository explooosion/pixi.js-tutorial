import * as PIXI from 'pixi.js';

const Game = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

document.body.appendChild(Game.view);

Game.loader
    .add('../assets/cat.png')
    .load(setup);

function setup() {
    // const cat = new PIXI.Sprite(Game.loader.resources['../assets/cat.png'].texture);
    const cat = new PIXI.Sprite(PIXI.utils.TextureCache['../assets/cat.png']);
    Game.stage.addChild(cat);
}
