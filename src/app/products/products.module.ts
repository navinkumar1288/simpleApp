import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CarComponent,
    BikeComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
