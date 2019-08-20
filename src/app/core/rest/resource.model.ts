/**
 * The base of Resource.
 * His unique id, when is created or update and his version.
 * @example user is a resource.
 */
export class Resource {
    /**
     * unique identifier of resource
     */
    id: number;
    /**
     * Creation date of resource
     */
    created: Date;
    /**
     * Update date of resource
     */
    updated: Date;
    /**
     * Actual version of resource
     */
    version: number;
}
