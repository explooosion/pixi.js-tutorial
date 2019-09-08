import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;

const game = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0x6699ff,
});

document.body.appendChild(game.view);

const message = new Text('Hello Pixi');
message.position.set(54, 96);
game.stage.addChild(message);

const style = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fill: '#fff',
    stroke: '#f30',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: '#000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
});

const messageWithStyle = new Text('Hello Pixi', style);
messageWithStyle.position.set(54, 128);
game.stage.addChild(messageWithStyle);
