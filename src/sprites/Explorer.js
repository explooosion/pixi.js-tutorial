/* eslint-disable indent */
import * as PIXI from 'pixi.js';

import { width } from '../config';

export default class Explorer extends PIXI.Sprite {
    constructor(texture) {
        super(texture);
        this.name = 'Explorer';
        this.x = 68;
        this.y = width / 2 - this.height / 2;
        this.vx = 0;
        this.vy = 0;

        window.game.ticker.add(this.play.bind(this));

        window.addEventListener('keydown', this.onKeyDownEvent.bind(this));
        window.addEventListener('keyup', this.onKeyUpEvent.bind(this));
    }

    play() {
        this.x += this.vx;
        this.y += this.vy;
    }

    onKeyDownEvent(e) {
        switch (e.keyCode) {
            case 37:
                this.vx = -5;
                break;
            case 38:
                this.vy = -5;
                break;
            case 39:
                this.vx = 5;
                break;
            case 40:
                this.vy = 5;
                break;
        }
    }

    onKeyUpEvent(e) {
        switch (e.keyCode) {
            case 37:
            case 39:
                this.vx = 0;
                break;
            case 38:
            case 40:
                this.vy = 0;
                break;
        }
    }
}