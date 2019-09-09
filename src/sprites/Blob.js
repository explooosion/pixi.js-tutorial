import * as PIXI from 'pixi.js';

let speed = 2, direction = 1;

import { width, height } from '../config';

export default class Blob extends PIXI.Sprite {
    constructor(texture) {
        super(texture);
        this.name = 'Blob';
        this.position.set(32, 0);
        const min = this.height * 2;
        const max = height - this.height * 2 - 1;
        this.y = Math.floor(Math.random() * (max - min + 1)) + min;
        this.vy = speed * direction;

        window.game.ticker.add(this.play.bind(this));
    }

    play() {
        this.y += this.vy;
        if (this.y < this.width || this.y > width - this.width * 2)
            this.reverseDirection();
    }

    reverseDirection() {
        this.vy *= -1;
    }

}