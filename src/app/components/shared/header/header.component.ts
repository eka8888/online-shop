import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products:Product[]=[];
 name:any;

  constructor(public product:ProductService) { }

  ngOnInit(): void {
    this.product.getProducts().subscribe((response)=>{
      this.products=response;
    })
  }
  Search(){
    if(this.name==""){
       this.ngOnInit();
    }else{
      this.products=this.products.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }
  }

}
