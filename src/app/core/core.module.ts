import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* router */

import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

/* ---------------- */

/* components */

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
/* ---------------- */


/* directives */
import { MiddleDirective } from '../shared/directives/middle.directive';
/* ---------------- */

/* angular material */

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

/* ---------------- */

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MiddleDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent]
})
export class CoreModule { }
