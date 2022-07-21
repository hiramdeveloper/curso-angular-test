import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverFocus]'
})
export class HoverFocusDirective {

  constructor() { }

  @HostBinding('style.background-color') backgroungColor!: string;

  @HostListener('mouseover') onHover() {
    this.backgroungColor = 'blue';
  }

  @HostListener('mouseout') onLeave() {
    this.backgroungColor = 'inherit';
  }

}
