import * as PIXI from 'pixi.js';

export default class Door extends PIXI.Sprite {
    constructor(texture) {
        super(texture); 
        this.name = 'Door';
        this.position.set(32, 0);
    }
}