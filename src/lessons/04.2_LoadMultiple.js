import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Loader = new PIXI.Loader(),
    resources = Loader.resources;

const Game = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

document.body.appendChild(Game.view);

// ref: https://github.com/englercj/resource-loader/blob/master/src/Loader.js#L245
const Image = (name, url) => ({ name, url, crossOrigin: true /* option */ });

Loader
    .add([
        Image('cat', '../assets/cat.png'),
        Image('blob', '../assets/blob.png'),
        Image('explorer', '../assets/explorer.png'),
    ])
    .load(setup);

class Sprite extends PIXI.Sprite {
    // http://pixijs.download/release/docs/PIXI.Sprite.html#x
    constructor(texture, x = 0, y = 0) {
        super(texture);
        this.x = x;
        this.y = y;
    }
}

function setup() {
    const cat = new Sprite(resources['cat'].texture);
    const blob = new Sprite(resources['blob'].texture, 82, 82);
    const explorer = new Sprite(resources['explorer'].texture, 128, 128);

    Game.stage.addChild(cat);
    Game.stage.addChild(blob);
    Game.stage.addChild(explorer);
}
