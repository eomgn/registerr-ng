import { Product } from './../../products.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  products!: Product

  constructor(private productsService: ProductsService, private router: Router, private activeRouter: ActivatedRoute) {

  }


  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id') as 'number'

    this.productsService.readById(id).subscribe(products => {
      this.products = products
    })
  }


  onUpdate() {
    this.productsService.update(this.products).subscribe(() => {

      this.productsService.openSnackbar('Produto atualizado com sucesso!')
    
      this.router.navigate(['/products'])

    })
  }

  cancel() {
    return this.router.navigate(['/products'])
  }

}
