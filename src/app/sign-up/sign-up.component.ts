import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }


  user = new FormGroup({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user.value);
    this.userService.createUser(this.user.value).subscribe(response => {
      if(response){
        this.userService.updateLogInStatus(true);
        this.router.navigate(['user-list']);
      }
    });
  }

}
