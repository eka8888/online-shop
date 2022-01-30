import {Product} from './product'

export class CartItem {
  id:any;
  productId:any;
  productName:any;
  qty:any;
  price:any;

  constructor(id:any,product:Product,qty=1){
    this.id=id;
    this.productId=product.id;
    this.productName=product.name;
    this.price=product.price;
    this.qty=qty
  }

}
