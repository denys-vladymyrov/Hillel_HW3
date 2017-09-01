import { Component } from '@angular/core';
import { ProductServices } from '.././product.service'
import { Router } from "@angular/router"
import { Product } from '.././product';

@Component({
    selector: 'home-app',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  })
  export class ProductListComponent {
    
    constructor(private router: Router, private productService: ProductServices) {}
    
    onSelect(selected: Product){
      // this.productService.productClick(Product);
      this.router.navigate(["details", selected.id]);
    }
    
  
  }