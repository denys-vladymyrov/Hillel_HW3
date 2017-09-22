import { Component } from '@angular/core';
import { ProductServices } from '.././shared/product.service'
import { Router } from "@angular/router"
import { Product } from '.././shared/product';

@Component({
    selector: 'home-app',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  })
  export class ProductListComponent {
    
    constructor(private router: Router, private productService: ProductServices) {}
    
    onSelect(id){
      this.router.navigate(["details", id]);
    }
    
  
  }