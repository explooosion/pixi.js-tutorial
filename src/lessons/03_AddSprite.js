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
    .add('cat', '../assets/cat.png')
    .load(setup);

function setup() {
    const cat = new PIXI.Sprite(Game.loader.resources['cat'].texture);
    // const cat = new PIXI.Sprite(PIXI.utils.TextureCache['../assets/cat.png']);
    Game.stage.addChild(cat);

    // Game.stage.removeChild(cat);
    // cat.visible = false; 
}

// function setup(loader, resources) {
//     const cat = new PIXI.Sprite(resources['cat'].texture);
//     Game.stage.addChild(cat);
// }