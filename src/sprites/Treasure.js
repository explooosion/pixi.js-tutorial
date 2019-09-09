import * as PIXI from 'pixi.js';

import { width, height } from '../config';

export default class Treasure extends PIXI.Sprite {
    constructor(texture) {
        super(texture);
        this.name = 'Treasure';
        this.x = width - this.width - 48;
        this.y = height / 2 - this.height / 2;
    }
}