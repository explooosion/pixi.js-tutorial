import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Sprite = PIXI.Sprite,
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
const Image = (name, url) => ({ name, url });

Loader
    .add([
        Image('cat', '../assets/cat.png'),
        Image('blob', '../assets/blob.png'),
        Image('explorer', '../assets/explorer.png'),
    ])
    .on('progress', loadProgressHandler)
    .load(setup);

function setup() {
    const cat = new Sprite(resources['cat'].texture);
    const blob = new Sprite(resources['blob'].texture);
    const explorer = new Sprite(resources['explorer'].texture);

    blob.position.set(82, 82);
    // blob.x = 82;
    // blob.y = 82;
    explorer.position.set(128, 128);

    Game.stage.addChild(cat);
    Game.stage.addChild(blob);
    Game.stage.addChild(explorer);
}

function loadProgressHandler(loader, resource) {
    console.log(resource.name, resource.url);
    console.log('progress: ' + loader.progress + '%');
}