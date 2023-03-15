import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../products.model';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  products: Product = {
    id: 0,
    name: '',
    price: ''
  }

  constructor(private productsService: ProductsService, private router: Router) {

  }

  create()  {
    
    this.productsService.create(this.products).subscribe(data => {
      this.products = data
      this.productsService.openSnackbar('Produto cadastrado com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.productsService.cancel()
  }

}
