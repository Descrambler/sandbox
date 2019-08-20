import { JSONSerializer } from '@app/_helpers/json-serializer';
import { Auth } from './auth.model';

/**
 * Auth serializer
 */
export class AuthSerializer implements JSONSerializer {

    /**
     * Convert a Json object to an Auth object
     * @param json a no null json
     * @returns Return converted Auth
     */
    fromJson(json: any): Auth {
        const auth = new Auth();
        auth.token = json ? json.token : null;
        auth.login = json ? json.login : null;
        return auth;
    }

    /**
     * Convert an Auth to a JSON object
     * @param auth a no null valid Auth
     * @returns Return converted Json Auth Object
     */
    toJson(auth: Auth): any {
        const json = {
            login: auth.login,
            token: auth.token ? auth.token : null
        };
        return json;
    }


}


