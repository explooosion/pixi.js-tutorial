import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Sprite = PIXI.Sprite,
    Loader = new PIXI.Loader(),
    resources = Loader.resources;

const game = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1,
});

document.body.appendChild(game.view);

Loader
    .add('treasureHunter', '../assets/treasureHunter.json')
    .add('dungeon', '../assets/dungeon.png')
    .load(setup);

function setup() {

    // add dungeon
    const dungeon = new Sprite(resources['dungeon'].texture);
    game.stage.addChild(dungeon);

    // add explorer
    const explorer = new Sprite(resources['treasureHunter'].textures['explorer.png']);
    explorer.x = 68;
    explorer.y = game.stage.height / 2 - explorer.height / 2;
    game.stage.addChild(explorer);

    // or get resources from json file's frames
    const frames = resources['treasureHunter'].textures;

    // add treasure from frames
    const treasure = new Sprite(frames['treasure.png']);
    treasure.x = game.stage.width - treasure.width - 48;
    treasure.y = game.stage.height / 2 - treasure.height / 2;
    game.stage.addChild(treasure);

    // add door
    const door = new Sprite(frames['door.png']);
    door.position.set(32, 0);
    game.stage.addChild(door);

    // add blobs
    let numberOfBlobs = 6, spacing = 48, xOffset = 150;
    for (let i = 0; i < numberOfBlobs; i++) {
        const blob = new Sprite(frames['blob.png']);
        blob.x = spacing * i + xOffset;
        blob.y = Math.floor(Math.random() * (game.stage.height - blob.height + 1));
        game.stage.addChild(blob);
    }

}