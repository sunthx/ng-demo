import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { Logger } from "./logger";

@Injectable()
export class UserService {
    user:string="user service";
    constructor(logger:Logger){
        logger.log('user service...');
    }
    getHeros():Hero[]{
        return [
            new Hero(100,'hero100'),
            new Hero(101,'hero101')];
    }
}