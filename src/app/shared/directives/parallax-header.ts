import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[parallax-header]', // Attribute selector,
  host: {
    '(ionScroll)': 'onContentScroll($event)',
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class ParallaxHeaderDirective {

  header: any;
  headerHeight: any;
  translateAmt: any;
  scaleAmt: any;

  constructor(
    public element: ElementRef,
    public renderer: Renderer
  ) { }

  // @HostListener('ionScroll', ['$event'])
  onContentScroll(ev: any): void {
    ev.domWrite(() => {
      this.updateParallaxHeader(ev);
    });
  }

  // @HostListener('window:resize', ['$event'])
  onWindowResize(ev) {
    this.headerHeight = this.header.clientHeight;
  }

  ngOnInit() {

    let content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
    this.header = content.getElementsByClassName('header-image')[0];
    let mainContent = content.getElementsByClassName('main-content')[0];

    this.headerHeight = this.header.clientHeight;

    this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
    this.renderer.setElementStyle(this.header, 'background-size', 'cover');
    this.renderer.setElementStyle(mainContent, 'position', 'absolute');

  }



  // onContentScroll(ev){

  //     ev.domWrite(() => {
  //         this.updateParallaxHeader(ev);
  //     });

  // }

  updateParallaxHeader(ev) {

    if (ev.scrollTop >= 0) {
      this.translateAmt = ev.scrollTop / 2;
      this.scaleAmt = 1;
    } else {
      this.translateAmt = 0;
      this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
    }

    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');

  }

}
