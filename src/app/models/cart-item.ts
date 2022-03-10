import { Product } from "./product";

export class CartItem {
    search: any;
    getCartItems() {
      throw new Error('Method not implemented.');
    }
    
    productName: string;
    productId: number;
    id: number;
    price: number;
    qty: number;

    constructor(id: number, product: Product, qty = 1){
        this.id = id;
        this.productId = product.id;
        this.productName= product.name;
        this.price = product.price;
        this.qty = qty;
        
    }

}
