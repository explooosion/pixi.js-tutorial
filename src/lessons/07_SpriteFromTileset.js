import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle;

const Game = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

const loader = Game.loader;

document.body.appendChild(Game.view);

loader
    .add('tileset', '../assets/tileset.png')
    .load(setup);

function setup() {

    const texture = TextureCache['../assets/tileset.png'];

    const rectangle = new Rectangle(192, 128, 64, 64);

    texture.frame = rectangle;

    const rocket = new Sprite(texture);

    rocket.x = 100;
    rocket.y = 100;

    rocket.pivot.set(32, 32);
    // rocket.pivot.set(rocket.width / 2, rocket.height / 2);
    // rocket.rotation = 0.3;
    setInterval(() => rocket.rotation += 0.1, 10);

    Game.stage.addChild(rocket);
}