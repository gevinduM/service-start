import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { }

  LogginServiceMethod(message: string){
    console.log('A server status changed, new status: ' + message);
  }

}
