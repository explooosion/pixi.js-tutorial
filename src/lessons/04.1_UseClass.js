import * as PIXI from 'pixi.js';

class Application extends PIXI.Application {
    constructor(options) {
        super(options);
    }
}

class Sprite extends PIXI.Sprite {
    constructor(texture) {
        super(texture);
    }
}

class Loader extends PIXI.Loader {
    constructor() {
        super();
    }
}

const Game = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

document.body.appendChild(Game.view);

const loader = new Loader();

loader
    .add('cat', '../assets/cat.png')
    .load(setup);

function setup() {
    const cat = new Sprite(loader.resources['cat'].texture);
    Game.stage.addChild(cat);
}

// function setup(loader, resources) {
//     const cat = new Sprite(resources['cat'].texture);
//     Game.stage.addChild(cat);
// }