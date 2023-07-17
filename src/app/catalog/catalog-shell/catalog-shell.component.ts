import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../model/catalog.model';
import { Store } from '@ngrx/store';
import { ItemsFeatureState, selectItems } from '../state/catalog.selector';
import { CatalogPageActions } from '../state/actions/catalog-page.actions';
import { State } from '../state';

@Component({
  selector: 'app-catalog-shell',
  templateUrl: './catalog-shell.component.html',
  styleUrls: ['./catalog-shell.component.css']
})
export class CatalogShellComponent implements OnInit {

  // @Output()
  // itemAddedEvent = new EventEmitter<Item>();

  items$ = this.store.select(selectItems);

  constructor(private readonly store: Store<State>) {
  }
  ngOnInit(): void {
    this.store.dispatch(CatalogPageActions.getItems());
  }

  addItemToCart(item: Item) {
    this.store.dispatch(CatalogPageActions.addItemToCart({ item }));
    // this.itemAddedEvent.emit(item);
  }


}
