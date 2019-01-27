import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideDownAnimation =
  trigger('slideDownAnimation', [

    state('*', style({
      position: 'relative',
      // backgroundColor: 'rgba(0, 0, 0, 0.1)'
    })),
    transition(':enter', [
      style({
        top: '-100%',
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }),
      animate('.2s ease-in-out', style({
        top: 0,
        // backgroundColor: 'rgba(0, 0, 0, 0.1)'
      }))
    ]),
    transition(':leave', [
      animate('.2s ease-in-out', style({
        top: '-100%',
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }))
    ])
  ]);
