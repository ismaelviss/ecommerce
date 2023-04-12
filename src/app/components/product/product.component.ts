import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('product') product!: Product;

  @Output() addedProduct = new EventEmitter();
  @Output() showProduct = new EventEmitter<number>();

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  showDetails() {
    this.showProduct.emit(this.product.id);
  }
}
