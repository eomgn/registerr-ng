import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import  localPt  from '@angular/common/locales/pt';
registerLocaleData(localPt);

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

/* angular material */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

/* ---------------- */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';

import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductCreateComponent } from './features/products/components/product-create/product-create.component';
import { ProductReadComponent } from './features/products/components/product-read/product-read.component';
import { ProductUpdateComponent } from './features/products/components/product-update/product-update.component';
import { ProductDeleteComponent } from './features/products/components/product-delete/product-delete.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    DialogComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [{provide:LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
