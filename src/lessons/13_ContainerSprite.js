/* eslint-disable indent */
import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Container = PIXI.Container,
    Sprite = PIXI.Sprite,
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
    .add('animals', '../assets/animals.json')
    .load(setup);

function setup() {

    const frames = resources['animals'].textures;

    const cat = new Sprite(frames['cat.png']);
    cat.position.set(16, 16);

    const hedgehog = new Sprite(frames['hedgehog.png']);
    hedgehog.position.set(32, 32);

    const tiger = new Sprite(frames['tiger.png']);
    tiger.position.set(64, 64);

    //Group the animals
    const animals = new Container();
    animals.addChild(cat);
    animals.addChild(hedgehog);
    animals.addChild(tiger);
    animals.position.set(64, 64);

    // scaler container size
    // animals.width = 200;
    // animals.height = 200;

    // console.log(animals.children);

    console.log('Cat world position:', animals.toGlobal(cat.position));
    // cat.x + container.x = 16 + 64 => { x: 80, y: 80 }

    // Get cat position to global with unknow container
    console.log('Cat world position:', cat.parent.toGlobal(cat.position));
    // cat.x + container.x = 16 + 64 => { x: 80, y: 80 }

    // Use `getGlobalPosition` to find the sprite's global position
    console.log('Tiger world x: ' + tiger.getGlobalPosition().x);
    console.log('Tiger world y: ' + tiger.getGlobalPosition().y);

    // Use `toLocal` to find a sprite's position relative to another sprite
    console.log('From Tiger to Hedgehog x: ' + tiger.toLocal(tiger.position, hedgehog).x);
    console.log('From Tiger to Hedgehog y: ' + tiger.toLocal(tiger.position, hedgehog).y);

    game.stage.addChild(animals);
}
