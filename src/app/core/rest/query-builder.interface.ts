/**
 * Simply a interface for query option class to convert query to string or generate a query map
 */
export interface QueryBuilder {
    /**
     * Set variables to a query map
     */
    toQueryMap: () => Map<string, string>;
    /**
     * convert a query map to a query string
     */
    toQueryString: () => string;
}
