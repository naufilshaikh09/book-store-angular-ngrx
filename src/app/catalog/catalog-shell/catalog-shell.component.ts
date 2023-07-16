import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../model/catalog.model';
import { Store } from '@ngrx/store';
import { ItemsFeatureState, selectItems } from '../state/catalog.selector';
import { CatalogPageActions } from '../state/actions/catalog-page.actions';

@Component({
  selector: 'app-catalog-shell',
  templateUrl: './catalog-shell.component.html',
  styleUrls: ['./catalog-shell.component.css']
})
export class CatalogShellComponent {

  // @Output()
  // itemAddedEvent = new EventEmitter<Item>();

  items$ = this.store.select(selectItems);

  constructor(private readonly store: Store<ItemsFeatureState>) {
    debugger
    this.store.dispatch(CatalogPageActions.getItems());
  }

  addItemToCart(item: Item) {
    this.store.dispatch(CatalogPageActions.addItemToCart({ item }));
    // this.itemAddedEvent.emit(item);
  }


}
