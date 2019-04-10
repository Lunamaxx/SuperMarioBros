import {trait} from '../Entity.js';


export default class Velocity extends trait {
    constructor(){
        super('velocity');
    }

    update(entity, deltaTime){
        entity.pos.x += entity.vel.x * deltaTime;
        entity.pos.y += entity.vel.y * deltaTime;
    }
}