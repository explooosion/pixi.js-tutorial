import * as PIXI from 'pixi.js';

import { height } from '../config';

export default class Message extends PIXI.Text {
    constructor() {
        super();
        this.name = 'Message';
        this.text = 'The End!';
        this.style = new PIXI.TextStyle({
            fontFamily: 'Futura',
            fontSize: 64,
            fill: '#fff',
        });
        this.position.set(120, height / 2);
    }
}