import { Component, OnInit } from '@angular/core';
import { ProductServices } from '.././shared/product.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Product } from '.././shared/product';

@Component({
    selector: 'details-app',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
  })
  export class ProductDetailsComponent implements OnInit{

    product: Product;
    
    constructor(private productService: ProductServices,
                private router: Router,
                private activatedRoute: ActivatedRoute,) {}
  
    ngOnInit() {
      let id = +this.activatedRoute.snapshot.params["id"];
      this.product = this.productService.getProduct(id);
  }
  
  }