import { QueryBuilder } from './query-builder.interface';

/**
 * Class for rest service. Use to filter request
 */
export class QueryOptions implements QueryBuilder {

    /**
     * filter of actual page.
     */
    public pageNumber: number;
    /**
     * filter of Number of page.
     */
    public pageSize: number;

    /**
     * @ignore
     */
    constructor() {
        this.pageNumber = 1;
        this.pageSize = 10000;
    }

    /**
     * Set variables to a query map
     */
    toQueryMap() {
        const queryMap = new Map<string, string>();
        queryMap.set('pageNumber', `${this.pageNumber}`);
        queryMap.set('pageSize', `${this.pageSize}`);

        return queryMap;
    }

    /**
     * convert a query map to a query string
     */
    toQueryString() {
        let queryString = '';
        this.toQueryMap().forEach((value: string, key: string) => {
            queryString = queryString.concat(`${key}=${value}&`);
        });

        return queryString.substring(0, queryString.length - 1);
    }
}
