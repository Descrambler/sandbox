import { Component, OnInit } from '@angular/core';
import { User } from '@app/users/shared/user.model';
import { UsersService } from '@app/users/shared/users.service';

/**
 * Component of users page.
 * This component page use UserListComponent
 */
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  /**
   * List of users
   */
  users: User[];

  /**
   * @ignore
   */
  constructor(private usersSvc: UsersService) { }

  /**
   * Init user list. Call userService for that and populate users property
   */
  ngOnInit() {
    this.usersSvc.list().subscribe(data => { this.users = data; });
  }

}
