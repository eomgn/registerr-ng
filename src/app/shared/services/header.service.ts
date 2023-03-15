import { HeaderHandled } from './../../core/components/header/header.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headerData = new BehaviorSubject<HeaderHandled>({
    title: 'Início',
    icon: 'home',
    routerUrl: '/'
  })

  constructor() { }

  get HeaderHandled(): HeaderHandled {
    return this.headerData.value;
  }

  set HeaderHandled(data: HeaderHandled) {
    this.headerData.next(data)
  }
}
