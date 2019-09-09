import * as PIXI from 'pixi.js';

export default class Dungeon extends PIXI.Sprite {
    constructor(texture) {
        super(texture);
        this.name = 'Dungeon';
    }
}