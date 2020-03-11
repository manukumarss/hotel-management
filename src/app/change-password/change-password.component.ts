import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { Router} from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }/*  */

  changepasswordForm = new FormGroup({
    confirmPassword: new FormControl(''),
    existingPassword: new FormControl(''),
    newPassword: new FormControl('')
  });

isSubmitted  =  false;

get formControls() { return this.changepasswordForm.controls; }


ngOnInit() {

}

onSubmit() {
  console.log(this.changepasswordForm.value);
  this.userService.changepassword(this.changepasswordForm.value).subscribe(response => {
    if (response) {
      this.isSubmitted = true;
      if (this.changepasswordForm.invalid) {
        return;
      }
    }

    this.router.navigate(['login']);

  });
}
}
