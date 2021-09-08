import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, UrlSerializer, OutletContext, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path:'home', component:AboutComponent},
  {path:'about', component:ContactComponent},
  {path:'contact', component:HomeComponent},
  ];

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  
  userId="contact";
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
donav(){
  console.log("fffffff");

  this.router.resetConfig(routes);
 let cru= this.router.createUrlTree(['/', this.userId]);
 let cf=this.router.getCurrentNavigation();
 let gg =new OutletContext;
 console.log(gg);
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
