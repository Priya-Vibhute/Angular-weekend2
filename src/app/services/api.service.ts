import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',

})

export class ApiService {

  constructor(private httpClient:HttpClient) { 
      
    
  }

  getPosts()
  {
   let posts;
   let  response=this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
   response.subscribe((value)=>posts=value)
   return posts;
  }


}
