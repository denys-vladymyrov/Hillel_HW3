import { Component , Input, OnDestroy, OnInit } from '@angular/core';
import { ProductServices } from '.././shared/product.service'
import { Product } from '.././shared/product';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'home-app',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  })
  export class ProductListComponent{

    private subscription: Subscription;
    private id: number;
    @Input() redirect: string;
    lastId: number;
    

    constructor(private router: Router, private productService: ProductServices, private activatedRoute: ActivatedRoute) {
      this.subscription = activatedRoute.params.subscribe(params=>this.id=params['id']);
    }

    ngOnInit() {
      
        parseInt(this.activatedRoute.snapshot.params.id);

        this.activatedRoute.params.forEach((params: Params) => {
            this.lastId = params.id;
        });

    }
   
    
    onSelect(id){
        this.router.navigate(['details', id], {relativeTo: this.activatedRoute});
    }

    OnDestroy(){
        this.subscription.unsubscribe();
    }
    
  
  }