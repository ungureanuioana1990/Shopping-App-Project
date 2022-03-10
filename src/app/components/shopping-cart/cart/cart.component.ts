import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = [
    // {id : 1, productId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // {id : 2, productId: 2, productName: 'Test 2', qty: 5, price: 130 },
    // {id : 3, productId: 3, productName: 'Test 3', qty: 2, price: 150 },
    // {id : 4, productId: 4, productName: 'Test 4', qty: 1, price: 190 },
  ];
  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();

  }
  handleSubscription() {
    this.msg.getMsg().subscribe((product: any) => {
      this.loadCartItems();
    })
  }
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
    })

  }
  // addProductToCart(product: Product) {
  //   let productExists = false

  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].productId === product.id) {
  //       this.cartItems[i].qty++
  //       productExists = true
  //       break;
  //     }
  //   }

    // if (!productExists) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price
    //   })
    // }

    // this.calculateCartTotal()
  //}

  calculateCartTotal(): number {
    this.cartTotal = 0
    this.cartItems.forEach((item: any) => {
      this.cartTotal += (item.qty * item.price)
    });
    return this.cartTotal;
  }

  public updateCartItems(event: any): void {
    if (event.action) {
      for (let i in this.cartItems) {
        if (this.cartItems[i].id === event.cartItem.id) {
          this.cartItems[i].qty++
          break;
        }
      }
    } else if (!event.action) {
      for (let i in this.cartItems) {
        if (this.cartItems[i].id === event.cartItem.id) {
          if (this.cartItems[i].qty > 0) {
            this.cartItems[i].qty--;
          } else if (this.cartItems[i].qty === 0) {
            this.cartItems.splice(i,1);
          }
          break;
        }
        
      }
    }

  }
}
