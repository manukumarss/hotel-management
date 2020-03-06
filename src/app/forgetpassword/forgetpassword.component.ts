import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor( private router: Router, private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  isSubmitted  =  false;
  
  get formControls() { return this.loginForm.controls; }

  forgotpassword(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    //this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/user-list');
  }


  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required]
  });

}
}
