import { HomeModel } from './home.model';
import { HomeService } from './../../shared/services/home.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  homeModel: HomeModel[] = []

  homeModelUpdate!: HomeModel

  constructor(
    private headerService: HeaderService, 
    public dialog: MatDialog, 
    private homeService: HomeService,
    ) {
    headerService.HeaderHandled = {
      title: 'Lembretes',
      icon: 'library_add',
      routerUrl: '/'
    }
  }

  ngOnInit(): void {
    this.homeService.read().subscribe((data) => {
      this.homeModel = data
    })
  }


  addMessage(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  delete(id: number) {

    this.homeService.delete(id).subscribe(() => {

      window.location.reload()
    })
  }
}
