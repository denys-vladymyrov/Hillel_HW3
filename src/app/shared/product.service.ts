import {Injectable} from '@angular/core';
import {Product} from './product';

let List: Product[] = [
  new Product("Молоко", false, ""),
  new Product("Творог", false, ""),
  new Product("Хлеб", false, ""),
  new Product("Зубная паста", false, ""),
  new Product("Картошка", false, ""),
  new Product("Помидоры", false, ""),
  new Product("Стиральный порошок", false, ""),
  new Product("Гель для душа", false, "")
  ];


@Injectable()
export class ProductServices{
      
      private shoppingList: Product[]; 
       
      constructor(){
        this.shoppingList = List;
      }

      addProduct(product: HTMLInputElement, desc: HTMLTextAreaElement): void{
       if(product.value){
        this.shoppingList.push(new Product(product.value, false, desc.value));
        product.value = "";
       }
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