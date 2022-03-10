import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem:any
  @Output() updateCartItems = new EventEmitter<{cartItem: any, action: boolean}>();

  constructor() { }

  ngOnInit(): void {
  }

  public editContent(cartItem: any, action: boolean) {
      this.updateCartItems.emit(({cartItem, action}));
  }

}
