

export class Product {
 id:any;
 name:any;
 description:any;
 price:any;
 imageUrl:any;


 constructor(id:any,name:any,description:any='',price:any=0,imageUrl:any='https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13-Pro/Sierra-Blue/Apple-iPhone-13-Pro-Sierra-Blue-frontimage.png'){//defaultad gavucere momxmarebelma rom ar sheikvanos
   this.id=id
   this.name=name
   this.description=description
   this.price=price
   this.imageUrl=imageUrl

 }
}
