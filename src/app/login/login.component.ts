import { FormBuilder, FormGroup, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router: Router, private formBuilder: FormBuilder ) { }

 
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  isSubmitted  =  false;

  get formControls() { return this.loginForm.controls; }
 

  ngOnInit() {
    /* this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }); */
  }



  onSubmit(){
    this.isSubmitted = true;
    console.log(this.loginForm.value);
    this.userService.isLoggedInUser(this.loginForm.value).subscribe(response => {
      console.log(response)
      if(response){
        this.router.navigate(['user-list']);
      }
     // this.router.navigate(['user-list']);
    });
  }
}
