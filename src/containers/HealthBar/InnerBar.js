import * as PIXI from 'pixi.js';

export default class InnerBar extends PIXI.Graphics {
    constructor() {
        super();
        this.beginFill(0x000000);
        this.drawRect(0, 0, 128, 8);
        this.endFill();
    }
}