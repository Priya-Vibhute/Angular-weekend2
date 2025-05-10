import { Component } from '@angular/core';
import { DataService } from '../serrvices/data.service';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  receivedData:string="XYZ";
  constructor(private dataService:DataService)
  {

  }
  ngOnInit()
  {
        this.dataService.eventEmitter.subscribe((value)=>{
          this.receivedData=value;
        })
  }
}