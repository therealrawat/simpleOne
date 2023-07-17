import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {

  constructor(private _element: ElementRef, private _renderer: Renderer2) { }

  str = '^[0-9]+$'
  
  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    
    return new RegExp(this.str).test(event.key)
  }

}
