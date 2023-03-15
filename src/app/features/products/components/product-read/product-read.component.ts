import { Product } from './../../products.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  product: Product[] = []

  displayedColumns:string[] =['id','family', 'name', 'price', 'actions']

  constructor(public productService: ProductsService,) {

  }


  ngOnInit(): void {
    
    this.productService.read().subscribe(products => {
      this.product = products;
    } )
  } 



}
