import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlBase: string = 'http://localhost:3000/products'

  product: Product[] = []

  constructor(private http: HttpClient, public _snackbar: MatSnackBar, private router: Router) { }

  openSnackbar(message: string){
    this._snackbar.open(message, 'X', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  create(product: Product): Observable<Product> {
    
    return this.http.post<Product>(this.urlBase, product)
  }

  read(): Observable<Product[]> {

    return this.http.get<Product[]>(this.urlBase)
  }

  readById(id: string): Observable<Product> {

    const url = `${this.urlBase}/${id}`;

    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> { 

    const url = `${this.urlBase}/${product.id}`;

    return this.http.put<Product>(url, product)
  }

  delete(product: Product): Observable<Product> { 

    const url = `${this.urlBase}/${product.id}`;

    return this.http.delete<Product>(url)
  }

  cancel() {
    return this.router.navigate(['/products'])
  }
}
