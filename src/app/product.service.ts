import {Injectable} from '@angular/core';
import {Product} from './product';

let List = [
  new Product(1, "Молоко", false, ""),
  new Product(2, "Творог", false, ""),
  new Product(3, "Хлеб", false, ""),
  new Product(4, "Зубная паста", false, ""),
  new Product(5, "Картошка", false, ""),
  new Product(6, "Помидоры", false, ""),
  new Product(7, "Стиральный порошок", false, ""),
  new Product(8, "Гель для душа", false, "")
  ];


@Injectable()
export class ProductServices{
      
      private shoppingList; 
      private productId;
       
      constructor(){
        this.shoppingList = List;
        this.productId = this.shoppingList.length;
      }

      addProduct(product, desc){
       if(product.value){
        this.productId++;
        this.shoppingList.push(new Product(this.productId, product.value, false, desc.value));
        product.value = "";
       }
      }

      getProduct(id){
        return this.shoppingList[id - 1];
      }
    
      productClick(item){
        item.done = !item.done;
      }

      productDone(item){
        item.done = true;
      }
}