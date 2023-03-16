import { Product } from './../../products.model';
import { ActivatedRoute} from '@angular/router';
import { ProductsService } from '../../../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm!: FormGroup


  products!: Product

  constructor(
    private productsService: ProductsService, 
    private activeRouter: ActivatedRoute,
    private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id') as 'number'

    this.productsService.readById(id).subscribe(products => {
      this.products = products
    })

      /* validator of form */
    this.productForm = this.formBuilder.group({
      family: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
    })
  }


  onUpdate() {
    this.productsService.update(this.products).subscribe(() => {

      this.productsService.openSnackbar('Produto atualizado com sucesso!')
    
      this.productsService.cancel()
    })
  }

  cancel() {
    
    this.productsService.cancel()
  }

}
