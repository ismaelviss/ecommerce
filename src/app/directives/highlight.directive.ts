import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeve() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

  constructor(
    private elementRef: ElementRef
  ) {
    //this.elementRef.nativeElement.style.backgroundColor = 'red';
   }

}
