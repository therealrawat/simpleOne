import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTimeformat]'
})
export class TimeformatDirective {

  constructor(private _element: ElementRef, private _renderer: Renderer2) { }

  str = '/^(?:[0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/'
  
  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    
    const input = event.key;
    const value = this._element.nativeElement.value;
    const current: string = value + input;
    if( current && !String(current).match(this.str)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const ClipboardData = event.clipboardData?.getData('text') || '';
    if(!String(ClipboardData).match(this.str)) {
      event.preventDefault();
    }
  }

}
