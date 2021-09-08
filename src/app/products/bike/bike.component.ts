import { Component, OnInit } from '@angular/core';
import { Observable, of,range } from 'rxjs';
import {take,first} from 'rxjs/operators'


of(1,2,3).pipe(take(2)).subscribe(n=>console.log(n));
const numbers=range(1,8);
numbers.subscribe({
  next:value=>{console.log(value)},
  complete:()=>{console.log('Complete!')}
})
numbers.pipe(take(3)).subscribe(x=>console.log(x))
numbers.subscribe(hhh=>console.log(hhh))
@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
     this.testasync.subscribe(x=> this.testres=x.toString());

  }
  testres='';
  testasync=new Observable<string>(sub=>{
    sub.next("test1");
    sub.next("test2"); 
    setTimeout(()=>
    sub.next("testTimeout"),3000);
  })

 

}
