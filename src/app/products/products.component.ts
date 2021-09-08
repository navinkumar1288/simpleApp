import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OutletContext, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  donav(){
      let cru= this.router.createUrlTree(['/', "contact"]);
      let cf=this.router.routerState;
      let gg =new OutletContext;
      console.log(this.route);
      let paurl=this.router.parseUrl("/contact");
     let seurl=this.router.serializeUrl(paurl);
     console.log(cf);
     this.router.navigate([seurl],{
       queryParams:{page:1,yy:9},fragment:'test',
       queryParamsHandling:"preserve",preserveFragment:false,
       replaceUrl:false
     })
  }
}
