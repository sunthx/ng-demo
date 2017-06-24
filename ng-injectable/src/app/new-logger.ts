import { Injectable } from '@angular/core';

@Injectable()
export class NewLogger {
    logs:string[] = [];
    log(message:string){
        this.logs.push(message);
        console.log(`new logger : ${message}`);
    }
}