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
    userFirstName: new FormControl(''),
    userLastName: new FormControl(''),
    userEmail: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  ngOnInit() {}

  onSubmit() {
    console.log(this.user.value);
    const password = 'password';
    this.userService.createUser(this.user.value).subscribe(response => {
      alert('Use this OTP as a existing password ' + response[password]);
      if (response) {
        this.userService.updateLogInStatus(true);
        this.router.navigate(['change-password']);
      }
    });
  }

}
