import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdownExpand]'
})
export class DropdownExpandDirective implements OnInit {

  @HostBinding('class')
  elementClass = 'show';

  constructor(private elementRef: ElementRef, private renderer: Renderer2, hostElement: ElementRef) { }

  ngOnInit(): any{
  }

  @HostListener('mouseenter') mouseover(): any {
    const childElement = this.elementRef.nativeElement.querySelector('.dropdown-menu') !== null ? this.elementRef.nativeElement.querySelector('.dropdown-menu') : '';
    this.renderer.addClass(this.elementRef.nativeElement, 'show');
    if (childElement !== ''){
      this.renderer.addClass(childElement, 'show');
    }
  }

  @HostListener('mouseleave') mouseleave(): any {
    const childElement = this.elementRef.nativeElement.querySelector('.dropdown-menu') !== null ? this.elementRef.nativeElement.querySelector('.dropdown-menu') : '';
    this.renderer.removeClass(this.elementRef.nativeElement, 'show');
    if (childElement !== '') {
      this.renderer.removeClass(childElement, 'show');
    }
  }

}
