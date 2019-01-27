import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ElasticTextareaDirective, KeyboardAttachDirective, ParallaxHeaderDirective } from './';

@NgModule({
	declarations: [
    ElasticTextareaDirective,
    KeyboardAttachDirective,
    ParallaxHeaderDirective
  ],
	imports: [
    IonicModule
  ],
	exports: [
    ElasticTextareaDirective,
    KeyboardAttachDirective,
    ParallaxHeaderDirective
  ]
})
export class DirectiveModule {}
