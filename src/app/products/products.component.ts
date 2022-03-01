import { IProduct,ICategory }from './../Shared Classes and Types/Interfaces';
import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and Types/Enums';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    constructor() {
    this.Discount = DiscountOffers.d1;
    this.StoreName = "Amal Store";
    this.StoreLogo = "assets/MyImages/265449038_1849585755226133_2272281998177102344_n.jpg";
    this.ProductList = 
    [
      { ID: 1, Name: "Acer Nitro Laptop", Quantity: 5, Price: 500, Img: "assets/MyImages/Acer Nitro 5 AN515-55-53E5 Gaming Laptop.jpg" },
      { ID: 2, Name: "HP Laptop", Quantity: 5, Price: 20, Img: "assets/MyImages/HP 15-inch Laptop.jpg" },
      { ID: 3, Name: "Lenoveo Laptop", Quantity: 5, Price: 20, Img: "assets/MyImages/Lenovo 2021 Newest Ideapad 3 Laptop.jpg" },
      { ID: 4, Name: "Samsung Phone", Quantity: 5, Price: 20, Img: "assets/MyImages/Samsung Galaxy A12 (A127F).jpg" },

      
    ];
    this.CategoryList = [
      { ID: 10, Name: "Laptops" },
    {ID: 20,Name : "Mobiles"},
    {ID: 30,Name : "Watches"},
    ]
    this.ClientName = "Amal";
    this.IsPurshased;
    }
  
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  //ProductList: IProduct[];
  ProductList: IProduct[]; 
  CategoryList: ICategory[];
  ClientName: string="";
  IsPurshased: boolean=true;

//check discount
  // check: boolean= true;
  // Discountchecking(){
  //   if (this.Discount == 'No Discount') {
  //     this.check = false;
  //   }
  // }
  
  DiscountStatus!:boolean;
  CheckDiscount():boolean
  {
    return this.DiscountStatus= this.Discount!='No Discount';
  }

 ispurchasing() {
    this.IsPurshased=!this.IsPurshased;
  }
  ngOnInit(): void {
  }

}
