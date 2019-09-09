import * as PIXI from 'pixi.js';

export default class OuterBar extends PIXI.Graphics {
    constructor() {
        super();
        this.beginFill(0xff3300);
        this.drawRect(0, 0, 128, 8);
        this.endFill();
    }
}