import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { CartService } from '../cart.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadCart$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(({ payload: { page, limit } }) => {
      return this.cartService.getAll(page, limit).pipe(
        map((products) => {
          return { type: ActionTypes.LoadSuccess, payload: products };
        }),
        catchError(() => EMPTY)
      );
    })
  );

  constructor(
    private actions$: Actions,
    private cartService: CartService
  ) {}
}
