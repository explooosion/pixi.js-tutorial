import * as PIXI from 'pixi.js';

const World = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

// add canvas element
document.body.appendChild(World.view);

World.renderer.view.style.border = '1px dashed black';

World.renderer.resize(512, 512);

World.renderer.backgroundColor = 0x061639;