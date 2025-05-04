import { Component } from '@angular/core';
import { error, log } from 'console';
import { from, interval, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  observable1=new Observable((observer)=>{
    //next error complete

    // observer.next([12,56,89]);
    setTimeout(()=>{observer.next(12);},1000)
    setTimeout(()=>{observer.next(19);},2000)
    setTimeout(()=>{observer.next(16);},3000)
    setTimeout(()=>{observer.complete();},4000)

  
    // observer.error(new Error("Something went wrong"));
    
    // observer.next(100); you will not receive this data as it is after complete event


  });

  getData1()
  {
     this.observable1.subscribe({
      next:(value)=>console.log("Emitted Value",value),
      error:(error)=>console.log(error.message),
      complete:()=>console.log("Data fetched Successfully")
     })

  }

  //of, from Creation Operators

  observable2=of([12,45,67])

  getData2()
  {
    this.observable2.subscribe({
      next:(value)=>console.log("Emitted value by obervable 2",value),
      complete:()=>console.log("Data fetched")
    })

  }


  getData3()
  {
    from([12,67,90,34]).subscribe({
      next:(value)=>console.log("Emitted value by obervable 2",value),
      complete:()=>console.log("Data fetched")
    })

  }


  getData4()
  {
    interval(1000)
    .pipe(take(4))
    .subscribe({
      next:(value)=>console.log(value)
    })
  }
}
