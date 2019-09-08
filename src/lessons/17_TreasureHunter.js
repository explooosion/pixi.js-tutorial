/* eslint-disable indent */
import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Sprite = PIXI.Sprite,
    Container = PIXI.Container,
    Graphics = PIXI.Graphics,
    TextStyle = PIXI.TextStyle,
    Text = PIXI.Text,
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

let gameScene, gameOverScene;
let dungeon, explorer, treasure, door, blobs;
let healthBar, innerBar, outerBar;
let message;
let state;

function setup() {

    gameScene = new Container();
    game.stage.addChild(gameScene);

    const frames = resources['treasureHunter'].textures;

    // add dungeon
    dungeon = new Sprite(frames['dungeon.png']);
    gameScene.addChild(dungeon);

    // add explorer
    explorer = new Sprite(frames['explorer.png']);
    explorer.x = 68;
    explorer.y = game.stage.height / 2 - explorer.height / 2;
    explorer.vx = 0;
    explorer.vy = 0;
    gameScene.addChild(explorer);

    // add treasure
    treasure = new Sprite(frames['treasure.png']);
    treasure.x = game.stage.width - treasure.width - 48;
    treasure.y = game.stage.height / 2 - treasure.height / 2;
    gameScene.addChild(treasure);

    // add door
    door = new Sprite(frames['door.png']);
    door.position.set(32, 0);
    gameScene.addChild(door);

    // add blobs
    let numberOfBlobs = 6, spacing = 48, xOffset = 150, speed = 2, direction = 1;

    blobs = [];

    for (let i = 0; i < numberOfBlobs; i++) {
        const blob = new Sprite(frames['blob.png']);
        blob.x = spacing * i + xOffset;
        const min = blob.height * 2;
        const max = game.stage.height - blob.height * 2 - 1;
        blob.y = Math.floor(Math.random() * (max - min + 1)) + min;
        blob.vy = speed * direction;
        direction *= -1;
        blobs.push(blob);
        gameScene.addChild(blob);
    }

    healthBar = new Container();
    healthBar.position.set(game.stage.width - 170, 4);
    gameScene.addChild(healthBar);

    innerBar = new Graphics();
    innerBar.beginFill(0x000000);
    innerBar.drawRect(0, 0, 128, 8);
    innerBar.endFill();
    healthBar.addChild(innerBar);

    outerBar = new Graphics();
    outerBar.beginFill(0xff3300);
    outerBar.drawRect(0, 0, 128, 8);
    outerBar.endFill();
    healthBar.outer = outerBar;
    healthBar.addChild(outerBar);

    gameOverScene = new Container();
    gameOverScene.visible = false;
    game.stage.addChild(gameOverScene);

    message = new Text('The End!', new TextStyle({
        fontFamily: 'Futura',
        fontSize: 64,
        fill: '#fff',
    }));
    message.position.set(120, game.stage.height / 2);
    gameOverScene.addChild(message);

    state = play;

    game.ticker.add(gameLoop);

    window.addEventListener('keydown', onKeyDownEvent);
    window.addEventListener('keyup', onKeyUpEvent);
}

function gameLoop(delta) {
    state(delta);
}

function end() {
    gameScene.visible = false;
    gameOverScene.visible = true;
}

function play() {
    explorer.x += explorer.vx;
    explorer.y += explorer.vy;

    let explorerHit = false, treasureHit = false, doorHit = false;

    blobs.forEach(blob => {
        blob.y += blob.vy;
        if (onCollisionDetection(explorer, blob)) explorerHit = true;
        if (blob.y < blob.width || blob.y > game.stage.width - blob.width * 2) blob.vy *= -1;
    });

    if (explorerHit) {
        explorer.alpha = 0.5;
        healthBar.outer.width -= 1.5;
    } else {
        explorer.alpha = 1;
    }

    treasureHit = onCollisionDetection(treasure, explorer);
    if (treasureHit) {
        treasure.x = explorer.x + 8;
        treasure.y = explorer.y + 8;
    }

    doorHit = onCollisionDetection(treasure, door);
    if (doorHit) {
        state = end;
        message.text = 'You won!';
    }

    if (healthBar.outer.width <= 0) {
        state = end;
        message.text = 'You lost!';
    }
}

function onKeyDownEvent(e) {
    switch (e.keyCode) {
        case 37:
            explorer.vx = -5;
            break;
        case 38:
            explorer.vy = -5;
            break;
        case 39:
            explorer.vx = 5;
            break;
        case 40:
            explorer.vy = 5;
            break;
    }
}

function onKeyUpEvent(e) {
    switch (e.keyCode) {
        case 37:
        case 39:
            explorer.vx = 0;
            break;
        case 38:
        case 40:
            explorer.vy = 0;
            break;
    }
}

/**
 * Collision Detection
 * @param {*} s source 
 * @param {*} t target
 */
function onCollisionDetection(s, t) {

    let combinedHalfWidths, combinedHalfHeights, vx, vy;

    s.centerX = s.x + s.width / 2;
    s.centerY = s.y + s.height / 2;
    t.centerX = t.x + t.width / 2;
    t.centerY = t.y + t.height / 2;

    s.halfWidth = s.width / 2;
    s.halfHeight = s.height / 2;
    t.halfWidth = t.width / 2;
    t.halfHeight = t.height / 2;

    vx = s.centerX - t.centerX;
    vy = s.centerY - t.centerY;

    combinedHalfWidths = s.halfWidth + t.halfWidth;
    combinedHalfHeights = s.halfHeight + t.halfHeight;

    return Math.abs(vx) < combinedHalfWidths && Math.abs(vy) < combinedHalfHeights
        ? true : false;
}