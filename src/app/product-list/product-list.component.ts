import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product-interface';
import { GetItems, LoadItems } from '../store/actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[] = [];
  page = 1;
  limit = 10;

  constructor(private store: Store<{ items: []; cart: [] }>) { }

  ngOnInit(): void {
  }

  onScrollEnd() {
    this.page += 1;

    if (this.page <= 5) {
      this.store.dispatch(new GetItems({ page: this.page, limit: this.limit }));
    }
  }

}
