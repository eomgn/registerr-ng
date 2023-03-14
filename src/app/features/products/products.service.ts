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

  constructor(private http: HttpClient, public _snackbar: MatSnackBar) { }

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
}
