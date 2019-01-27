import { NgModule } from '@angular/core';
import { SanitizePipe } from './sanitizer.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    SanitizePipe,
    OrderByPipe
  ],
  imports: [

  ],
  exports: [
    SanitizePipe,
    OrderByPipe
  ],
  providers: [],
})
export class PipeModule {}
