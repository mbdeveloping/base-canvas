import Vector2D from "./Vector";
import Player from "./Player";

export default class World {
    constructor(width, height, canvasWidth, canvasHeight, debug) {
        this.debug = debug,
        this.width = width,
        this.height = height,
        this.position = new Vector2D(0, 0),
        this.canvasWidth = canvasWidth,
        this.canvasHeight = canvasHeight,
        this.gravity = 1,
        this.player = new Player(),
        this.actors = [
        ],
        this.enemies = [
        ]
    }

    //temp
    createSky(ctx) {
        ctx.fillStyle = 'skyblue';
        ctx.fillRect(0, 0, this.width, this.height);
    }

    update(step, currentTime) {
        if (this.debug) {this.gravity = 0}
    }

    render(ctx) {
        this.createSky(ctx);
    }
}