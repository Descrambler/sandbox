import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from 'src/app/core/rest/rest.service';
import { User } from './user.model';
import { UserSerializer } from '@app/users/shared/user.serializer';


/**
 * Service for users
 * @extends RestService
 */
@Injectable()
export class UsersService extends RestService<User> {

    /**
     * @ignore
     */
    constructor(http: HttpClient) {
        super(http, 'users', new UserSerializer());
    }

}
