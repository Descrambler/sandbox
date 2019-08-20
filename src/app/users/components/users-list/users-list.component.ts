import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/users/shared/user.model';

/**
 * List of user component
 */
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {

  /**
   * Input of user list.
   */
  @Input() users: User[];

}
