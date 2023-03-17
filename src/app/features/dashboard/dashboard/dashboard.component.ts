import { ProductsService } from './../../../shared/services/products.service';
import { Product } from './../../products/products.model';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productsService: ProductsService
  ) {}

  chartdata: any

  eletronicdata!: number
  fooddata!: number
  bookdata!: number

  ngOnInit(): void {

      this.productsService.read().subscribe(data => {
        this.chartdata = data

      this.eletronicdata  = data.filter(item => item.family === "Eletrônico").length
      this.fooddata  = data.filter(item => item.family === "Comida").length
      this.bookdata  = data.filter(item => item.family === "Livro").length

      this.readChart(this.eletronicdata,this.fooddata, this.bookdata)
    }
    )
  }

  readChart(eletronic:number, food:number, book: number) {

    new Chart("chart", {
      type: 'bar',
      data: {
        labels: ['Eletrônico','Comida','Livro'],
        datasets: [{
          label: 'Quantidade',
          data: [eletronic,food, book],
          backgroundColor: [
            '#f3433680',
            '#72f33680',
            '#3678f380'

          ],
          borderWidth: 1,

        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            beginAtZero: true
          }
        },
        indexAxis: 'y',
        
      }
    });
  }

}
