import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomePageComponent,
    UserListComponent,
    ForgetpasswordComponent,
    ChangePasswordComponent,
    UserDashboardComponent,
    OwnerDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
