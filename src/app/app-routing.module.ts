import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserListComponent } from './user-list/user-list.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';


/* const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
]; */

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'forgetpassword',
    component: ForgetpasswordComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent
  },
  {
    path: 'owner-dashboard',
    component: OwnerDashboardComponent
  },
  {
    path: '**',
    redirectTo: 'signup'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
