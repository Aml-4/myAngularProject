import { IUser } from './../Shared Classes and Types/IUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url: string = "https://jsonplaceholder.typicode.com/users";
  GetUsers():Observable<IUser>
  {
    return this.http.get<IUser>(this.url).pipe(catchError((error) => {
      return throwError(()=>error.message ||"your URL is incorrect!")
    }))
  }
}
