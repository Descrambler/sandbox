import { HelperString } from './string.hepler';

describe('StringHelper', () => {

    it('Random string length should equal to parameter', () => {
        expect(HelperString.Random(10).length).toEqual(10);
    });

    it('Random string without parameter should return a string with length of 8', () => {
        expect(HelperString.Random().length).toEqual(8);
    });

    it('the length must be greater than 0', () => {
        // HelperString.Random(-15);
        // fail();
    });

});
