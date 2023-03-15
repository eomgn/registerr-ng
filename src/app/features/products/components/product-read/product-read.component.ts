import { Product } from './../../products.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  product: Product[] = []

  displayedColumns:string[] =['id', 'name', 'price', 'actions']

  constructor(public productService: ProductsService,) {

  }


  ngOnInit(): void {
    
    this.productService.read().subscribe(products => {
      this.product = products;
    } )
  } 



}
