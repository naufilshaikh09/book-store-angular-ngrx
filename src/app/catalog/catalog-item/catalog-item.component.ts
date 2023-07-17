import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../model/catalog.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent {

  @Input()
  item: Item | undefined;

  @Output()
  addToCartEventEmitter = new EventEmitter<Item>();

  constructor() {
  }

  addToCart(item: Item | undefined): void {
    this.addToCartEventEmitter.emit(item);
  }

}
