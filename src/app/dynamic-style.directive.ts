import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';
import { css } from './style-tag';

@Directive({
  selector: '[appDynamicStyleDirective]'
})
export class DynamicStyleDirective implements OnChanges {

   @Input() primary = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    const styles = css`
      background-color: ${this.primary ? 'blue' : 'gray'};
      color: white;
      padding: 10px;
      border-radius: 5px;
    `;

    this.renderer.setAttribute(this.el.nativeElement, 'style', styles);
  }

}
