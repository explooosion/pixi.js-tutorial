/* eslint-disable indent */
import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Sprite = PIXI.Sprite,
    Graphics = PIXI.Graphics,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle,
    Loader = new PIXI.Loader(),
    resources = Loader.resources;

const game = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

document.body.appendChild(game.view);

Loader
    .add('cat', '../assets/cat.png')
    .load(setup);

let cat, box, message, state;

function setup() {

    // add box
    box = new Graphics();
    box.beginFill(0xccff99);
    box.drawRect(0, 0, 64, 64);
    // box.drawRect(120, 96, 64, 64); // dont use
    box.endFill();
    box.position.set(120, 96);
    game.stage.addChild(box);

    // add cat
    cat = new Sprite(resources['cat'].texture);
    cat.position.set(16, 96);
    cat.vx = 0;
    cat.vy = 0;
    game.stage.addChild(cat);

    // add text
    message = new Text('No collision...', new TextStyle({
        fontFamily: 'Arial',
        fontSize: 18,
        fill: '#fff',
    }));
    message.position.set(8, 8);
    game.stage.addChild(message);

    state = play;

    game.ticker.add(gameLoop);

    window.addEventListener('keydown', onKeyDownEvent);
    window.addEventListener('keyup', onKeyUpEvent);

}

function gameLoop(delta) {
    state(delta);
}

function play() {

    cat.x += cat.vx;
    cat.y += cat.vy;

    if (onCollisionDetection(cat, box)) {
        message.text = 'hit!';
        box.tint = 0xff3300;
        console.log('hi');
    } else {
        message.text = 'No collision...';
        box.tint = 0xccff99;
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

function onKeyDownEvent(e) {
    switch (e.keyCode) {
        case 37:
            cat.vx = -5;
            break;
        case 38:
            cat.vy = -5;
            break;
        case 39:
            cat.vx = 5;
            break;
        case 40:
            cat.vy = 5;
            break;
    }
}

function onKeyUpEvent(e) {
    switch (e.keyCode) {
        case 37:
        case 39:
            cat.vx = 0;
            break;
        case 38:
        case 40:
            cat.vy = 0;
            break;
    }
}