export default class Physics2D {
    constructor() {

    }

    /*
    *  Private methods
    */
     _rangeCollide(min0, max0, min1, max1) {
        return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1);
    }

    /*
    *  Satic methods
    */
    static objectCollide(obj1, obj2) {
        return this._rangeCollide(obj1.left, obj1.right, obj2.left, obj2.right) && this._rangeCollide(obj1.top, obj1.bottom, obj2.top, obj2.bottom);
    }

    static worldBoundriesCollisionLeft(world, actor) {
        return actor.left <= world.position.x;
    }

    static worldBoundriesCollisionRight(world, actor) {
        return actor.right >= world.width;
    }

    static worldBoundriesCollisionBottom(world, actor) {
        return actor.bottom >= world.height;
    }
}