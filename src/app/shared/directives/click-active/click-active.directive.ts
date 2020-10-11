import { Directive, HostBinding, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickActive]'
})
export class ClickActiveDirective {

  // Class to include.
  @HostBinding('.active') isActive = false;
  @Output() clickOutside = new EventEmitter<void>();
  classname = 'active';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event.target'])

  // public onClick(target): any {
  //   const clickedInside = this.elementRef.nativeElement.contains(target);
  //   if (!clickedInside) {
  //     console.log('outside click xx');
  //     // this.clickOutside.emit();
  //     // this.isActive = !this.isActive;
  //     this.renderer.addClass(this.elementRef.nativeElement, this.classname);
  //   }
  // }

  @HostListener('click', ['$event']) onClick($event): any {
    const clickedInside = this.elementRef.nativeElement.contains($event.target);

    if (clickedInside){
      this.renderer.removeClass(document.querySelectorAll('.mtb-active.active')[0], this.classname);
      this.renderer.addClass($event.target, this.classname);
    }
  }

}
