import { HelperDate } from './date.helper';

describe('DateHelper', () => {

    it('parseIsoToLocalDate should return a local Date', () => {
        const date = new Date(2019, 7, 9, 15, 30, 0);
        expect(HelperDate.parseIsoToLocalDate('2019-07-09T15:30:00.000Z')).toEqual(date);
    });

    it('parseIsoToLocalDate should return a undefined if string format is wrong', () => {
        expect(HelperDate.parseIsoToLocalDate('201-07-09T15:30:00.000Z')).toEqual(undefined);
        expect(HelperDate.parseIsoToLocalDate('00.000Z')).toEqual(undefined);
        expect(HelperDate.parseIsoToLocalDate('abcd-07-09T15:30:00.000Z')).toEqual(undefined);
    });

});
