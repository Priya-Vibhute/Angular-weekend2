import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../serrvices/data.service';

@Component({
  selector: 'app-a',
  imports: [FormsModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  enteredData:string="";
  constructor(private dataService:DataService)
  {
     
  }

  onBtnClick()
  {
    this.dataService.emitData(this.enteredData);
  }
}
