import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component'

import { ProductServices } from './shared/product.service'
import { appRoutes } from "./app.routes";
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    SharedModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
