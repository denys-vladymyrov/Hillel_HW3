import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component'

import { ProductServices } from './shared/product.service'



const appRoutes: Routes =[
  { path: '', component: ProductListComponent},
  { path: 'details', component: ProductDetailsComponent},
  { path: 'details/:id', component: ProductDetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
