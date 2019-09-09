import * as PIXI from 'pixi.js';

import GameScene from '../scenes/GameScene';
import GameOverScene from '../scenes/GameOverScene';

export default class BootStrap extends PIXI.Loader {
    constructor() {
        super();
        this.init = this.init.bind(this);
        this.setup = this.setup.bind(this);
        this.loadProgressHandler = this.loadProgressHandler.bind(this);
        this.init();
    }

    init() {
        this.add('treasureHunter', '../assets/treasureHunter.json');
        this.on('progress', this.loadProgressHandler);
        this.on('complete', () => console.log('com'));
        this.load(this.setup);
    }

    loadProgressHandler(loader, resource) {
        window.status = -1;
        console.log(resource.name, resource.url);
        console.log('progress: ' + loader.progress + '%');
    }

    setup(loader, resources) {

        window.game.scenes = [
            new GameScene(resources),
            new GameOverScene(),
        ];

        window.game.status = 0;
    }
}