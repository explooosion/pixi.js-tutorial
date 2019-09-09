/* eslint-disable indent */
// DEMO ===========================
// import './lessons/01_Status';
// import './lessons/02_AddCanvas';
// import './lessons/03_AddSprite';
// import './lessons/04_UseAliases';
// import './lessons/04.1_UseClass';
// import './lessons/04.2_LoadMultiple';
// import './lessons/05_LoadingProgress';
// import './lessons/06_PositionAndRotation';
// import './lessons/07_SpriteFromTileset';
// import './lessons/08_SpriteFromTextureAtlas';
// import './lessons/09_MovingSprites';
// import './lessons/10_VelocityVariables';
// import './lessons/11_GameStates';
// import './lessons/12_KeyboardMovement';
// import './lessons/13_ContainerSprite';
// import './lessons/14_GraphicsPrimitives';
// import './lessons/15_DisplayingText';
// import './lessons/16_CollisionDetection';
// import './lessons/17_TreasureHunter';
// DEMO ===========================

import * as PIXI from 'pixi.js';

import BootStrap from './bootstrap';

import { width, height } from './config';
import { Function } from 'core-js';

const optins = {
    width,
    height,
    antialias: true,
    transparent: false,
    resolution: 1,
};

window.game = PIXI.Application;

class Game extends PIXI.Application {

    constructor(options) {
        super(options);

        window.game = this;

        // initial
        this.status = -2;
        this.state = Function;

        this.play = this.play.bind(this);
        this.won = this.won.bind(this);
        this.lost = this.lost.bind(this);
        this.gameLoop = this.gameLoop.bind(this);

        this.loader = new BootStrap();
        this.ticker.add(this.gameLoop);
    }

    gameLoop() {
        switch (this.status) {
            default:
            case -1:
                break;
            case 0:
                // initial 
                this.play();
                break;
            case 1:
                // won
                this.won();
                break;
            case 2:
                // lost
                this.lost();
                break;
        }
    }

    play() {
        const gameScene = this.scenes.find(s => s.name === 'GameScene');
        this.stage.addChild(gameScene);
    }

    won() {
        this.stage.removeChildren();
        const GameOverScene = this.scenes.find(s => s.name === 'GameOverScene');
        GameOverScene.onGameWon();
        this.stage.addChild(GameOverScene);
    }

    lost() {
        this.stage.removeChildren();
        const GameOverScene = this.scenes.find(s => s.name === 'GameOverScene');
        GameOverScene.onGameLost();
        this.stage.addChild(GameOverScene);
    }
}

window.game = new Game(optins);
document.body.appendChild(window.game.view);
