import { Component } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private headerService: HeaderService) {}

  get title() {
    return this.headerService.HeaderHandled.title;
  }

  get icon() {
    return this.headerService.HeaderHandled.icon;
  }

  get routerUrl() {
    return this.headerService.HeaderHandled.routerUrl;
  }
  
}
