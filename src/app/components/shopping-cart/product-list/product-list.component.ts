import { WishlistService } from './../../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';

import {ProductService} from 'src/app/services/product.service'
import {Product} from 'src/app/models/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[] =[]
  wishlist:any=[]


  constructor(
    private productService: ProductService,
    private wishlistService:WishlistService
    ) { }

  ngOnInit(){
  this.loadProducts();
  this.loadWishlist();
  }
loadProducts(){
  this.productService.getProducts().subscribe((products)=>{
    this.productList=products;

  })
}

loadWishlist(){
  this.wishlistService.getWishlist().subscribe((productIds)=>{
    console.log(productIds)
    this.wishlist=productIds;
  })
}
}
