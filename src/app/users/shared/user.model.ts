import { Resource } from '@app/core/rest/resource.model';
import { Auth } from '@app/core/auth/shared/auth.model';

/**
 * Correspond to an user DTO
 */
export class User extends Resource {
    /**
     * first name of user
     */
    firstName: string;
    /**
     * last name of user
     */
    lastName: string;
    /**
     * Login of user
     */
    auth: Auth;
}
