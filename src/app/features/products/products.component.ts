import { Component } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private headerService: HeaderService) {
    headerService.HeaderHandled = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routerUrl: '/products/'
    }
  }

}
