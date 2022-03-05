import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userservice:UserService) { }

  UserData!: any;
  ErrorMes!: any;

  ngOnInit(): void {
    this.userservice.GetUsers().subscribe((Udata) => {
      this.UserData=Udata
    }, (err) => {
      this.ErrorMes = err;
    }
      
    );
  }

}
