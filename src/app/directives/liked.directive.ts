import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLiked]'
})
export class LikedDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'rgb(100,100,240)';
 }
}
