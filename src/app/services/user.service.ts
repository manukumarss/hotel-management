import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  createUser(user: any){
    return this.http.post('/api/users/createNewUser', user);
  }

  getAllUsers(){
    return this.http.get('/api/users/getAllUsersDetails');
  }

  changepassword(user: any){
    return this.http.post('/api/users/changePassword', user);
  }

  isLoggedInUser(user: any){
    return this.http.post('/api/users/login', user);
  }


  isUserLoggedIn(){
    return this.isLoggedIn;
  }

  updateLogInStatus(status: boolean){
    this.isLoggedIn.next(status);
  }
}
