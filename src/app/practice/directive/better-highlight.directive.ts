import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({ selector: '[appHightlight]' })
export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'green';
  }
  @HostListener('mouseleave') onMouseleave() {
    this.backgroundColor = 'red';
  }
  constructor(private elRef: ElementRef) { }
  ngOnInit() {
    this.backgroundColor = 'transparent';
  }
}
