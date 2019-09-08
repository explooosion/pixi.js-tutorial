import * as PIXI from 'pixi.js';

const Application = PIXI.Application,
    Graphics = PIXI.Graphics;

const game = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

document.body.appendChild(game.view);

const circle = new Graphics();
circle.beginFill(0x9966ff);
circle.drawCircle(0, 0, 32);
circle.endFill();
circle.x = 64;
circle.y = 130;
game.stage.addChild(circle);

const rectangle = new Graphics();
rectangle.lineStyle(4, 0x9966ff, 1);
rectangle.beginFill(0x66ccff);
rectangle.drawRect(0, 0, 64, 64);
rectangle.endFill();
rectangle.x = 170;
rectangle.y = 170;
game.stage.addChild(rectangle);

const line = new Graphics();
line.lineStyle(4, 0xffffff, 1);
line.moveTo(0, 0);
line.lineTo(80, 50);
line.x = 32;
line.y = 32;
game.stage.addChild(line);

//Ellipse
const ellipse = new Graphics();
ellipse.beginFill(0xFFFF00);
ellipse.drawEllipse(0, 0, 50, 20);
ellipse.endFill();
ellipse.x = 180;
ellipse.y = 130;
game.stage.addChild(ellipse);

//Triangle
const triangle = new Graphics();
triangle.beginFill(0x66FF33);

//Use `drawPolygon` to define the triangle as an
//array of x/y positions

triangle.drawPolygon([
    -32, 64,             //First point
    32, 64,              //Second point
    0, 0                 //Third point 
]);

triangle.endFill();

//Position the triangle after you've drawn it.
//The triangle's x/y position is anchored to its first point in the path
triangle.x = 180;
triangle.y = 22;

game.stage.addChild(triangle);

//Rounded rectangle
const roundBox = new Graphics();
roundBox.lineStyle(4, 0x99CCFF, 1);
roundBox.beginFill(0xFF9933);
roundBox.drawRoundedRect(0, 0, 84, 36, 10);
roundBox.endFill();
roundBox.x = 48;
roundBox.y = 190;
game.stage.addChild(roundBox);
