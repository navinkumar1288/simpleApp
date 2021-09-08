import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private router : Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  go() {
    console.log(this.route.url)
    console.log(this.router.routerState.root)
    //this.router.navigate(['../bike'],{relativeTo:this.route,fragment:'top',queryParams:{page:1}})
    this.router.navigateByUrl('/products/bike')
  }
  
}
