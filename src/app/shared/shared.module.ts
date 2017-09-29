import { NgModule } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../admin/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule

  ],
  declarations: [ProductListComponent, AddComponent],
  exports: [
    ProductListComponent,
    AddComponent
  ]
  })
  
  export class SharedModule {}