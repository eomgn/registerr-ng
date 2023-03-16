import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../products.model';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  productForm!: FormGroup

  products: Product = {
    id: 0,
    family: '',
    name: '',
    price: ''
  }

  constructor(private productsService: ProductsService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {

      /* validator of form */
    this.productForm = this.formBuilder.group({
      family: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
    })
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
