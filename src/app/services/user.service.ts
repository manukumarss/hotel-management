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
    return this.http.post('/api/users', user);
  }

  getAllUsers(){
    return this.http.get('/api/users');
  }

  isUserLoggedIn(){
    return this.isLoggedIn;
  }

  updateLogInStatus(status: boolean){
    this.isLoggedIn.next(status);
  }
}
