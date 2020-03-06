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
  /*   password: new FormControl(''),
    confirmpassword: new FormControl(''), */
    phoneNumber: new FormControl('')
  });

  

  ngOnInit() {
    /* this.signupform  =  this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailid: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      contactno: ['', Validators.required]
}); */
}

  onSubmit(){
    console.log(this.user.value);
    this.userService.createUser(this.user.value).subscribe(response => {
      alert("Use this OTP as a existing password "+response['password'])
      if(response){
        this.userService.updateLogInStatus(true);
        this.router.navigate(['change-password']);
      }
    });
  }

}
