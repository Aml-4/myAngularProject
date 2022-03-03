import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and Types/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  ProductList:IProduct[] = 
    [
      { ID: 1, Name: "Acer Nitro Laptop", Quantity: 5, Price: 500, Img: "" },
      { ID: 2, Name: "HP Laptop", Quantity: 5, Price: 20, Img: "" },
      { ID: 3, Name: "Lenoveo Laptop", Quantity: 5, Price: 20, Img: "" },
      { ID: 4, Name: "Samsung Phone", Quantity: 5, Price: 20, Img: "" },

      
    ];
  GetAllProducts() {
    return this.ProductList;
  }

  ProductId: any;
  GetProductById(prdId:any) {
    if (typeof prdId == 'number') {
      this.ProductList.filter((e)=>{
      if(e.ID===prdId){
        this.ProductId=e;
      }
      
    });
      return this.ProductId
    }
    else {
      return null;
    }
  }

}
