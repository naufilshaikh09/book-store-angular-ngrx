import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../model/catalog.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/cart/state';
import { Observable } from 'rxjs';
import { selectCartItems } from 'src/app/cart/state/cart.selector';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {

  @Input()
  item: Item | undefined;

  @Output()
  addToCartEventEmitter = new EventEmitter<Item>();

  // numberOfItems$: Observable<number>;
  // numberOfItems: number;

  constructor(private store: Store<State>) {

  }

  ngOnInit(): void {
    // debugger
    // numberOfItems = this.store.select(selectCartItems).subscribe(res => {
    //   if (res == null && res.length === 0) return 0;

    //   return res
    //     .filter((x: { id: string; }) => x.id === this.item?.id)
    //     .map((x: { numberOfItems: any; }) => x.numberOfItems)[0];
    // });
    // console.log(this.item);
  }

  addToCart(item: Item | undefined): void {
    this.addToCartEventEmitter.emit(item);
  }

}
