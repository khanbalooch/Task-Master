
import {Component, ElementRef, Input, OnChanges, Renderer, SimpleChange, SimpleChanges} from '@angular/core';
import {Config, IonItem, IonItemOptions} from '@ionic/angular';

@Component({
  selector: 'simple-line-icon',
  template: ''
})
export class SimpleLineIconComponent implements OnChanges  {
  @Input() name: string;
  @Input() size: string;

  @Input('fixed-width')
  set fixedWidth(fixedWidth: string) {
    // this.setElementClass('icon-fw', this.isTrueProperty(fixedWidth));
  }

  constructor(config: Config, elementRef: ElementRef, renderer: Renderer) {
    // super(config, elementRef, renderer, 'icon');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.name) {
      this.unsetPrevAndSetCurrentClass(changes.name);
    }
    if (changes.size) {
      this.unsetPrevAndSetCurrentClass(changes.size);
    }
  }

  isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
      val = val.toLowerCase().trim();
      return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
  };

  unsetPrevAndSetCurrentClass(change: SimpleChange) {
    // this.setElementClass('icon-' + change.previousValue, false);
    // this.setElementClass('icon-' + change.currentValue, true);
  }
}
