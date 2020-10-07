import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'white';
  }

  @Input() highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight("yellow");
    // this.makeInvisible();
    // this.makeBigger();
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("orange");
    // this.makeVisible();
    // this.makeSmaller();
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

  makeVisible() {
    this.el.nativeElement.style = "visibility: visible";
  }

  makeInvisible() {
    this.el.nativeElement.style = "visibility: hidden"
  }

  makeBigger() {
    this.el.nativeElement.style = "font-size: 1.5rem"
  }

  makeSmaller() {
    this.el.nativeElement.style = "font-size: 1rem"
  }

}
