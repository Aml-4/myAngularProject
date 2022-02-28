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
    this.Discount = DiscountOffers['No Discount'];
    this.StoreName = "My Store";
    this.StoreLogo = "assets/MyImages/265449038_1849585755226133_2272281998177102344_n.jpg";
    this.ProductList = 
    {
      ID: 1,
      Name: "Tea",
      Quantity: 5,
      Price: 20,
      Img: "src" 
  
    };
    this.CategoryList = {
    ID: 20,
    Name : "Drinks"
    }
    this.ClientName = "Amal";
    this.IsPurshased = true;

  }

  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct; 
  CategoryList: ICategory;
  ClientName: string;
  IsPurshased: boolean;

  ngOnInit(): void {
  }

}
