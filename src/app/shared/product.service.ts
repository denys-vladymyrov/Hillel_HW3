import {Injectable} from '@angular/core';
import {Product} from './Product';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// let List: Product[] = [
//   new Product("Молоко", false, ""),
//   new Product("Творог", false, ""),
//   new Product("Хлеб", false, ""),
//   new Product("Зубная паста", false, ""),
//   new Product("Картошка", false, ""),
//   new Product("Помидоры", false, ""),
//   new Product("Стиральный порошок", false, ""),
//   new Product("Гель для душа", false, "")
//   ];


@Injectable()
export class ProductServices{
      
      private shoppingList: Product[]; 
      receivedProduct: Product; 
      done: boolean = false;

      constructor(private http: Http){   
        this.getAll();
        this.getById(0);
      }

      addProduct(product: HTMLInputElement, desc: HTMLTextAreaElement): void{
        if(product.value){
          let newProduct = new Product(product.value, false, desc.value);
          
          this.postProduct(newProduct);
            
          product.value = "";
        }
      }

      postProduct(product: Product){
        // const body = JSON.stringify(product);
        // let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        // return this.http.post('http://localhost:3000/products', product)
        // // return this.http.post('http://localhost:3000/products', body, { headers: headers })
        //           .map((resp:Response)=>resp.json())
        //           .catch((error:any) =>{return Observable.throw(error);}); 

        return this.http.post('http://localhost:3000/products', product)
          .subscribe(
            result => {
                if(result.status === 200){
                  this.shoppingList.push(product);
                }
            },
            error => console.log(error.statusText)
          )
      }

      getAll(){
        // return this.http.get("http://localhost:3000/products").map((data: Response) => data.json());
         this.http.get("http://localhost:3000/products").subscribe((data: Response) => this.shoppingList = data.json());
      }

      getById(id: number){
        this.http.get("http://localhost:3000/products/id/" + id).subscribe((data: Response) => console.log(data.json()));
      }

      getProduct(id: number): Product{
        return this.shoppingList[id];
      }

      getProductAmount(): number{
        return this.shoppingList.length;
      }
      

      editProduct(id: number, product: Product){
        this.shoppingList[id] = product;
      }
    
      productChangeStatus(item: Product): void{
        item.done = !item.done;
      }

      productDone(item: Product): void{
        item.done = true;
      }
}