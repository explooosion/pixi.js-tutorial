import * as PIXI from 'pixi.js';

import Dungeon from '../sprites/Dungeon';
import Explorer from '../sprites/Explorer';
import Treasure from '../sprites/Treasure';
import Blob from '../sprites/Blob';
import Door from '../sprites/Door';

import HealthBar from '../containers/HealthBar';

import { onCollisionDetection } from '../utils';

export default class GameScene extends PIXI.Container {
    constructor(resources) {
        super();
        this.name = 'GameScene';
        this.frames = resources['treasureHunter'].textures;
        this.create();

        window.game.ticker.add(this.play.bind(this));
    }

    create() {
        // add dungeon 
        this.dungeon = new Dungeon(this.frames['dungeon.png']);
        // add explorer
        this.explorer = new Explorer(this.frames['explorer.png']);
        // add treasure
        this.treasure = new Treasure(this.frames['treasure.png']);
        // add door
        this.door = new Door(this.frames['door.png']);
        // add healthbar
        this.healthBar = new HealthBar();

        this.addChild(
            this.dungeon,
            this.explorer,
            this.treasure,
            this.door,
            this.healthBar
        );

        // add blobs
        let numberOfBlobs = 6;

        this.blobs = [Blob];

        const spacing = 48, xOffset = 150;
        for (let i = 0; i < numberOfBlobs; i++) {
            const blob = new Blob(this.frames['blob.png']);
            blob.x = spacing * i + xOffset;
            this.blobs.push(blob);
            this.addChild(blob);
        }
    }

    play() {
        let explorerHit = false, treasureHit = false, doorHit = false;

        this.blobs.forEach(blob => {
            if (onCollisionDetection(this.explorer, blob)) explorerHit = true;
        });

        if (explorerHit) {
            this.explorer.alpha = 0.5;
            this.healthBar.outer.width -= 1.5;
        } else {
            this.explorer.alpha = 1;
        }

        treasureHit = onCollisionDetection(this.treasure, this.explorer);
        if (treasureHit) {
            this.treasure.x = this.explorer.x + 8;
            this.treasure.y = this.explorer.y + 8;
        }

        if (this.healthBar.outer.width <= 0) {
            window.game.status = 2;
        }

        doorHit = onCollisionDetection(this.treasure, this.door);
        if (doorHit) {
            window.game.status = 1;
        }

    }
}