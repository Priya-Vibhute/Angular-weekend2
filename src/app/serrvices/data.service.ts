import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

//  eventEmitter= new EventEmitter<string>();
eventEmitter=new Subject<string>()

 //emitData("AD")
 emitData(data:string)
 {
    //  this.eventEmitter.emit(data); 
    this.eventEmitter.next(data); 

 }


}
