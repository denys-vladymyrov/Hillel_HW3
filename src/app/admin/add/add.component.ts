import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../../shared/product.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private productService: ProductServices) { }

  ngOnInit() {
  }

}
