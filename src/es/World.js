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

    getInsersectingPlatforms(actor) {
        let intersectingPlatforms = this.platforms.filter((platform) => {
            if (this.objectCollide(actor, platform)) {return true}
        });

        return intersectingPlatforms;
    }

    actorWorldCollision(actor) {
        let inresectingPlatforms = this.getInsersectingPlatforms(actor);

        if (inresectingPlatforms.length > 0) {
            actor.collide.active = true;
        } else {
            actor.collide.active = false;
        }

        inresectingPlatforms.forEach((platform, i) => {
            if (this.objectCollide(actor, platform)) {

                //top
                if (actor.top < platform.bottom  && actor.top > platform.top && actor.left < platform.right && actor.right > platform.left) {
                    actor.velocity.setY(0);
                    actor.position.setY(platform.bottom);
                    // console.log('top')
                }

                //bottom
                if (actor.bottom >= platform.top && actor.bottom < platform.top + actor.velocity.getY) {
                    actor.collide.bottom = true;
                    actor.isOnGround = true;
                    actor.position.setY(platform.top - actor.height);
                    // console.log('bottom');
                }

                //left
                if (actor.left < platform.right && actor.right > platform.right && actor.bottom > platform.top && actor.top < platform.bottom) {
                    actor.collide.left = true;
                    actor.velocity.setX(0);
                    actor.position.setX(platform.right + 1);
                    console.log('left');
                } else {
                    actor.collide.left = false;
                }

                //right
                if (actor.right > platform.left && actor.left < platform.left && actor.bottom > platform.top && actor.top < platform.bottom) {
                    console.log('right');
                    actor.collide.right = true;
                    actor.velocity.setX(0);
                    actor.position.setX(platform.left - actor.width - 1); 
                } else {
                    actor.collide.right = false;
                }


            }
        });
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