import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSerializer } from './user.serializer';
import { User } from './user.model';
import { Auth } from '@app/core/auth/shared/auth.model';


describe('UserSerializer', () => {
    let serializer: UserSerializer;
    let jsonUser: any;
    let user: User;

    beforeAll(() => {
        serializer = new UserSerializer();
        const auth = new Auth('test', null);
        // tslint:disable-next-line: max-line-length
        jsonUser = JSON.parse('{"id":1,"firstName":"Test","auth":{"login":"test","token":null},"lastName":"User","created":"2019-07-08T14:00:00.000Z","updated":"2019-07-08T14:00:00.000Z","version":1}');

        user = new User();
        user.id = 1;
        user.firstName = 'Test';
        user.auth = auth;
        user.lastName = 'User';
        user.created = new Date('2019-07-08T14:00:00.000Z');
        user.updated = new Date('2019-07-08T14:00:00.000Z');
        user.version = 1;

    });

    it('should return a valid User', () => {
        const res = serializer.fromJson(jsonUser);
        expect(user).toEqual(res);
    });

    it('should return a valid Json User', () => {
        expect(serializer.toJson(user)).toEqual(jsonUser);
    });

});
