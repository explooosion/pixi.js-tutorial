import * as PIXI from 'pixi.js';

import InnerBar from './InnerBar';
import OuterBar from './OuterBar';

import { width } from '../../config';

export default class HealthBar extends PIXI.Container {
    constructor() {
        super();
        this.game = window.game;
        this.position.set(width - 170, 4);

        this.innerBar = new InnerBar();
        this.addChild(this.innerBar);

        this.outer = new OuterBar();
        this.addChild(this.outer);
    }
}