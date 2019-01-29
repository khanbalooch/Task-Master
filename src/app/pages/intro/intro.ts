import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { ForgotComponent } from './forgot/forgot';
import { Router } from '@angular/router';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  styles: ['intro.scss']
})
export class IntroPage implements OnInit {

  @ViewChild(IonSlides) slider: IonSlides;
  slides: Array<{ title: string; paragraph: string; image: string; button?: { text: string; show: boolean; click?: (e: any) => void } }> = [];
  currentSlideIndex: number = 0;

  constructor(public router: Router) { }

  ngOnInit() {
    this.slides = [
      {
        title: 'Welcome',
        paragraph: 'Morbi et pellentesque mauris, eget fringilla tortor. Vestibulum justo metus, varius vitae orci at, viverra commodo ligula.',
        image: './assets/icon/002-note-1.png',
      },
      {
        title: 'ToDo Tasks',
        paragraph: 'Vivamus pretium scelerisque dui, id rhoncus leo tempus ut. Nullam nec velit ullamcorper augue venenatis pulvinar vitae vitae ex. Pellentesque purus nibh, tempor a consectetur vel, ultrices vitae augue.',
        image: './assets/icon/004-checklist.png',
      },
      {
        title: 'Events Calendar',
        paragraph: 'Duis felis sem, mattis porta est sed, ultrices efficitur ex. Donec ac nibh ut mi ullamcorper sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: './assets/icon/003-time.png'
      },
      {
        title: 'Quick Notes',
        paragraph: 'Sed a turpis eu eros dignissim luctus. Aliquam pulvinar tortor nunc, ac tristique odio facilisis eget. Nullam vel sodales arcu. In facilisis a orci at fermentum.',
        image: './assets/icon/001-note.png'
      }
    ]
  }

  slideChanged() {
    this.slider.getActiveIndex().then(res => {
      this.currentSlideIndex = res;
    });
  }

  previous() {
    if (this.currentSlideIndex !== 0) this.slider.slidePrev();
  }

  next() {
    if (this.currentSlideIndex !== this.slides.length - 1) this.slider.slideNext();
    else if(this.currentSlideIndex === this.slides.length - 1){
      this.goToIntro();
    }
  }


  goToIntro() {
    this.router.navigateByUrl('LoginComponent');
    //this.navCtrl.push(LoginComponent);
  }

}
