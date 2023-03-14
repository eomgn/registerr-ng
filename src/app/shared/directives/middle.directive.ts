import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Middle]'
})
export class MiddleDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.verticalAlign = 'middle';
  }

}
