import { Component, OnInit } from '@angular/core';
import { Product } from '../.././shared/product';
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import { ProductServices } from '../.././shared/product.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: Product;
  public id: number;
  public prevDisabled = false;
  public nextDisabled = false;
  
  private subscription: Subscription;

  constructor(private productService: ProductServices,
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
                   
                router.events.subscribe(event => {
                
                  if(event instanceof NavigationEnd) {  
                    this.ngOnInit();
                  }
                
                });
            
              }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params["id"];
    this.product =  Object.assign({}, this.productService.getProduct(this.id));
  }

  onSubmit(userForm: NgForm){
    console.log(userForm.value);
    this.productService.editProduct(this.id, userForm.value);
    
  }

  prev(){
    let resultId = this.id - 1

   

    if(resultId === 0){
      this.prevDisabled = true;
    }
    else{
      this.nextDisabled = false;
    }

    const rout = '../' + resultId;
    this.router.navigate([rout],  {relativeTo: this.activatedRoute});

    
  }

  next(){
    let resultId = this.id + 1

    console.log("result: " + resultId);
    console.log(this.productService.getProductAmount());

    if(resultId >= this.productService.getProductAmount() - 1){
      this.nextDisabled = true;
    }
    else{
      this.prevDisabled = false;
    }

    const rout = '../' + resultId;
    this.router.navigate([rout],  {relativeTo: this.activatedRoute});
  }

}
