import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Resource } from './resource.model';
import { JSONSerializer } from '../../_helpers/json-serializer';
import { QueryOptions } from './query-option';
import { environment } from '@env/environment';

/**
 * Generic Rest service. Use this class to Create a CRUD service quickly.
 */
export class RestService<T extends Resource> {

    /**
     * Constructor of rest service.
     * @param http used to call backend
     * @param endpoint correspond to the endpoind name @example /users
     * @param serializer correspond to serializer to convert JSON TO OBJECT and conversly.
     */
    constructor(
        public http: HttpClient,
        private endpoint: string,
        private serializer: JSONSerializer
    ) { }

    /**
     * Call POST request to add a new resource.
     * @param item resource to add.
     */
    create(item: T): Observable<T> {
        return this.http
            .post<T>(`${environment.apiUrl}/${this.endpoint}`, this.serializer.toJson(item))
            .pipe(map(data => this.serializer.fromJson(data) as T))
            .pipe(catchError(err => this.handleError(err)));
    }

    /**
     * Call GET request to get a resource.
     * @param id resource ID to get.
     */
    read(id: number): Observable<T> {
        return this.http
            .get(`${environment.apiUrl}/${this.endpoint}/${id}`)
            .pipe(map((data: any) => this.serializer.fromJson(data) as T))
            .pipe(catchError(err => this.handleError(err)));
    }

    /**
     * Call PUT request to update a resource.
     * @param item resource to update.
     */
    update(item: T): Observable<T> {
        return this.http
            .put<T>(`${environment.apiUrl}/${this.endpoint}/${item.id}`, this.serializer.toJson(item))
            .pipe(map(data => this.serializer.fromJson(data) as T))
            .pipe(catchError(err => this.handleError(err)));
    }

    /**
     * Call DELETE request to delete a resource.
     * @param id resource ID to Delete.
     */
    delete(id: number) {
        return this.http
            .delete(`${environment.apiUrl}/${this.endpoint}/${id}`)
            .pipe(catchError(err => this.handleError(err)));
    }

    /**
     * Call GET request to get a list of resources
     * @param queryOptions To filter request
     */
    list(queryOptions?: QueryOptions): Observable<T[]> {
        return this.http
            .get(`${environment.apiUrl}/${this.endpoint}${queryOptions ? '?' + queryOptions.toQueryString() : ''}`)
            .pipe(map((data: any) => this.convertData(JSON.parse(data))))
            .pipe(catchError(err => this.handleError(err)));
    }

    /**
     * To catch an error in restService.
     * @param error error message.
     */
    private handleError(error: any) {
        return throwError(error);
    }

    /**
     * Serialize JSON resource(s) to resource list
     * @param data JSON resources to convert
     */
    protected convertData(data: any): T[] {
        return data ? data.map((item: any) => this.serializer.fromJson(item), catchError(err => this.handleError(err)))
            : null;
    }

}
