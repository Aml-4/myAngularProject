import { ProductsComponent } from './products/products.component';
import { Component, ViewChild } from '@angular/core';
/* 
@component is meta-data which tell the class below it that it's a class component which has to have some features 
like selector(act like name of the component),
temlateURL(the html page of the component),
styleURL(style pagest related to the component).
so @component is a decorator which attach collection of data on class in RunTime
*/
@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myAngularProject';

_Product:any;
  
  constructor(){}
  @ViewChild(ProductsComponent) ShowProductList!:ProductsComponent;

  ngAfterViewInit(): void {
    this._Product=this.ShowProductList.renderValues();
  }
  flag: boolean=false;
  ShowProducts()
  {
    this.flag =! this.flag    
  }
  

}
