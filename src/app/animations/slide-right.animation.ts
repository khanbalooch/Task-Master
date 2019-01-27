import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideRightAnimation =
  trigger('slideRightAnimation', [

    state('*', style({
      position: 'relative',
    })),
    transition(':enter', [
      style({
        right: '-400%',
      }),
      animate('.2s ease-in-out', style({
        right: 0,
      }))
    ]),
    transition(':leave', [
      animate('.2s ease-in-out', style({
        right: '-400%',
      }))
    ])
  ]);
