import { NgModule } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [ProductListComponent],
  exports: [
    ProductListComponent
  ]
  })
  
  export class SharedModule {}