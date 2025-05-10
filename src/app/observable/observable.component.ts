import { Component } from '@angular/core';
import { error, log } from 'console';
import { catchError, delay, filter, from, interval, map, merge, mergeAll, mergeMap, Observable, of, pipe, retry, switchAll, switchMap, take } from 'rxjs';

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

  getData5()
  {
    of(12,56,100,45,90)
    .pipe(
      map(value=>value*10)
    )
    .subscribe({
      next:(value)=>console.log(value)
    })
  }

  getData6()
  {
    of(12,56,100,45,90)
    .pipe(
      filter(value=>value>50),
      map(value=>"Value given by map "+value),
      take(2)
    )
    .subscribe({
      next:(value)=>console.log(value)
    })
  }

  getData7()
  {
    merge(of(12,67,100),of("A","B","C"))
    .subscribe({
      next:(value)=>console.log(value)
    })
  }

  getData8()
  {
    from("HELLO")
    .pipe(
      mergeMap((value)=>of(value,[12,56])),
      // mergeAll()
     
    )
    .subscribe({
      next:(value)=>console.log(value)
    })
  }

  getData9()
  {
    of(12,67,89,45)
    .pipe(
      delay(4000),
    )
    .subscribe({
      next:(value=>console.log(value))
    })

  }

  getData10()
  {
    of(12,56,899,45,678)
    .pipe(
      switchMap(value=>of(value).pipe(delay(3000))),
      // switchAll()
    
    ).subscribe({
      next:value=>console.log(value)
    })
  }


  interval4=interval(1000)
  interval4_subscription:any;

  getData11()
  {
    this.interval4_subscription=this.interval4.subscribe({
      next:(value)=>console.log(value)
    })
  }

  stop_subscription()
  {
    this.interval4_subscription.unsubscribe()
  }

  getData12()
  {
    let count=0;
    of(100,200,300,400,500,600)
    .pipe(
      map(value=>{
        count++;
        if(value==300)
        {
          throw new Error("Something went wrong")
        }

        return value

        
      }),
      retry(4),
      catchError((error)=>{
        console.log(error.message);
        return of("A","B","C")
      })
    ).subscribe({
      next:(value)=>console.log(value)
    })

    console.log("Count:",count)
  }

  


}
