import { Component, OnInit } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { UserService } from '../services/user.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: any[];
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }

}
