import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShellState, selectNumberOfCartItems } from 'src/app/state/core.selector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  numberOfCartItems$: Observable<number>;

  constructor(private store: Store<ShellState>) {
    this.numberOfCartItems$ = this.store.select(selectNumberOfCartItems);
  }
}
