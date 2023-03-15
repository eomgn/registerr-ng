import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../products.service';
import { Product } from './../../products.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {

  products!: Product

  constructor(private productsService: ProductsService, private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id') as 'number'

    this.productsService.readById(id).subscribe(products => {
      this.products = products
    })
  }

  onDelete() {

    this.productsService.delete(this.products).subscribe(product => {
     this.products = product

     this.productsService.openSnackbar('Produto deletado com sucesso')
     this.productsService.cancel()
    })
  }

  cancel() {
    this.productsService.cancel()
  }
}
