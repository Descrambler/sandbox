/**
 * Authentification model
 */
export class Auth {
    /**
     * username of user
     */
    login: string;
    /**
     * token (JWT) of user
     */
    token?: string;

    /**
     * @ignore
     */
    constructor(login?: string, token?: string) {
        this.login = login;
        this.token = token;
    }

}
