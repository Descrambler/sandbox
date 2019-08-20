/**
 * Simple interface for JSON serializer
 */
export interface JSONSerializer {
    /**
     * Serialize a JSON to object from serializer
     */
    fromJson(json: any): any;
    /**
     * Serialize a object type to JSON from serializer
     */
    toJson(resource: any): any;
}

/**
 * Simple Satic serializer class
 */
export class StaticSerializer {

    /**
     * Serialize a JSON to object from serializer
     */
    public static fromJson(json: any, serializer: any): any {
        return serializer.fromJson(json);
    }

    /**
     * Serialize a object type to JSON from serializer
     */
    public static toJson(resource: any, serializer: any): any {
        return serializer.toJson(resource);
    }
}

