import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  } 

}
