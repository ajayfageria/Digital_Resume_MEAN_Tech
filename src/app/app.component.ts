import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, observable, Observable, pipe } from 'rxjs';
import { map, catchError, switchMap, debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { ApiService } from './services/apiService';
import { HttpService } from './services/httpService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-app';

  mySubject= new BehaviorSubject('hello world');
  myObserver!: Observable<any>;

  constructor(){
    
  }
  
  buySugarInBulk(){
    return new Observable(emitter=>{
      emitter.next("sugar purchased in bulk");
    });
  }
  buySugarQuantity(quantity:any){
    return new Observable(emitter=>{
      emitter.next(`sugar purchased in ${quantity}`);
    })
  }

   bugSugarFromShop(){
  //observable A is dependent on observable B-
  //method 1
  //  this.buySugarInBulk().subscribe(data=>{
  //    this.buySugarQuantity("10kg").subscribe(data=>{
  //        console.log(data);
  //    }) 
  //  })
  //method 2 using switch map
  const newObserver=this.buySugarInBulk().pipe(switchMap(()=>{
    return this.buySugarQuantity('!10kg');
  }));
  newObserver.subscribe((data)=>{
    console.log(data);
  })
}
  
  login(){
  // this.mySubject.next(this.loginForm.value);
    console.log("called")
   //Map operator
  //  const formData= this.loginForm.valueChanges.pipe(map(data=>{
  //     return data.email;
  //   }));
  //   formData.subscribe((data)=>{
  //     console.log(data);
  //   })
  //filter
  // const filterData=this.loginForm.valueChanges.pipe(filter(data=>{
  //   if(data.email === 'ajay@gmail.com'){
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }))
  // filterData.subscribe(data=>{
  //   console.log(data);
  // })
      //observable
  //     this.myObserver=new Observable((emitter)=>{
  //       console.log("called");
  //       emitter.next(this.loginForm.value)
  //       emitter.next("hello")
  //     })

  //  this.myObserver.subscribe((data)=>{
  //    console.log(data);
  //  })
  }
 
}
//     this.loginForm.valueChanges.subscribe((data)=>{
//       console.log(data);
// })
//   }
