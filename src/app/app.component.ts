import { Component } from '@angular/core';
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
}
