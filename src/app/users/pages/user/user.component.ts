import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UsersService } from '@app/users/shared/users.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '@app/users/shared/user.model';

/**
 * Page component for user detail
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UsersService]
})
export class UserComponent implements OnInit {

  /**
   * *Observable of an user
   */
  users$: Observable<User>;

  /**
   * @ignore
   */
  constructor(
    private route: ActivatedRoute,
    private service: UsersService
  ) { }

  /**
   * Get the param Id give by url
   */
  ngOnInit() {
    this.users$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.read(+params.get('id')))
    );
  }

}
