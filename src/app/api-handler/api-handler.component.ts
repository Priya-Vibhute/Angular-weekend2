import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-handler',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './api-handler.component.html',
  styleUrl: './api-handler.component.css'
})
export class ApiHandlerComponent {

  constructor(private apiService:ApiService)
  {
        
  }

  posts=undefined;

  ngOnInit()
  {
     this.posts=this.apiService.getPosts();
     console.log(this.posts)
  }

}
