import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { ApiHandlerComponent } from './api-handler/api-handler.component';

@Component({
  selector: 'app-root',
  imports: [ObservableComponent,AComponent,BComponent,ApiHandlerComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondapp';
}
