import { Injectable } from '@angular/core';
import { Logger } from "./logger";
import { UserService } from "./user.service";

@Injectable()
export class BetterLogger extends Logger {

    constructor(private userService:UserService) { super(); }

    log(message:string){
        let user = this.userService.user;
        super.log(`message to ${user} : ${message}`);
    }
}