import { Resource } from './resource.model';
import { JSONSerializer } from '@app/_helpers/json-serializer';

/**
 * Resource serializer
 */
export class ResourceSerializer implements JSONSerializer {

    /**
     * Convert a Json object to a Resource
     * @param json a no null json
     * @returns Return converted Resource
     */
    fromJson(json: any): Resource {
        const obj = new Resource();
        obj.id = json.id;
        obj.created = new Date(json.created);
        obj.updated = new Date(json.updated);
        obj.version = json.version;
        return obj;
    }

    /**
     * Convert an Resource to a JSON object
     * @param r a no null valid Resource
     * @returns Return converted Json Resource Object
     */
    toJson(r: Resource): any {
        return {
            id: r.id,
            created: r.created.toISOString(),
            updated: r.updated.toISOString(),
            version: r.version
        };
    }
}
