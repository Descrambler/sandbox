import { JSONSerializer, StaticSerializer } from '@app/_helpers/json-serializer';
import { User } from './user.model';
import { ResourceSerializer } from '@app/core/rest/resource.serializer';
import { Auth } from '@app/core/auth/shared/auth.model';
import { AuthSerializer } from '@app/core/auth/shared/auth.serializer';
import { Resource } from '@app/core/rest/resource.model';

/**
 * User serializer
 */
export class UserSerializer implements JSONSerializer {

    /**
     * Resource serializer use for fromJson() and toJSon()
     */
    private rsc: ResourceSerializer;
    /**
     * Auth serializer use for fromJson() and toJSon()
     */
    private auth: AuthSerializer;

    /**
     * @ignore
     */
    constructor() {
        this.rsc = new ResourceSerializer();
        this.auth = new AuthSerializer();
    }

    /**
     * Convert a Json object to an user
     * @param json a no null json
     * @returns Return converted user
     */
    fromJson(json: any): User {
        const user = new User();
        const r = StaticSerializer.fromJson(json, this.rsc) as Resource;
        user.id = r.id;
        user.created = r.created;
        user.updated = r.updated;
        user.version = r.version;
        user.auth = StaticSerializer.fromJson(json.auth, this.auth) as Auth;
        user.firstName = json.firstName;
        user.lastName = json.lastName;
        return user;
    }

    /**
     * Convert an User to a JSON object
     * @param user a no null valid user
     * @returns Return converted Json user Object
     */
    toJson(user: User): any {
        const json = StaticSerializer.toJson(user, this.rsc);
        json.firstName = user.firstName;
        json.lastName = user.lastName;
        json.auth = StaticSerializer.toJson(user.auth, this.auth);
        console.log(json);
        return json;
    }
}
