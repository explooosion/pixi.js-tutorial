import * as PIXI from 'pixi.js';

import Message from '../texts/Message';

export default class GameOverScene extends PIXI.Container {
    constructor() {
        super();
        this.name = 'GameOverScene';

        this.message = new Message();
        this.addChild(this.message);
    }

    onGameWon() {
        this.message.text = 'You Won!';
    }

    onGameLost() {
        this.message.text = 'You Lost!';
    }

}