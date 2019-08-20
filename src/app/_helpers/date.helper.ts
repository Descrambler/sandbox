/**
 * Helper for Date
 */
export class HelperDate {

    /**
     * Parse a string date to Date
     * @param dateAsString a string date
     * @param ymdDelimiter delimiter
     */
    public static dateFromUTC(dateAsString, ymdDelimiter) {
        console.log(`dateFromUTC : ${dateAsString}`);
        const pattern = new RegExp('(\\d{4})' + ymdDelimiter + '(\\d{2})' + ymdDelimiter + '(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})');
        const parts = dateAsString.match(pattern);
        return new Date(Date.UTC(
            parseInt(parts[1], 10)
            , parseInt(parts[2], 10) - 1
            , parseInt(parts[3], 10)
            , parseInt(parts[4], 10)
            , parseInt(parts[5], 10)
            , parseInt(parts[6], 10)
            , 0
        ));
    }

    /** parse an Iso date to a local Date (yyyy-MM-jjThh:mm:ss.000Z')
     * @param isoDate : a date with a ISO format
     * @return new Date() or undefined if can't parse
     */
    public static parseIsoToLocalDate(isoDate: string) {
        try {
            if (!this.isIsoDate(isoDate)) {
                return undefined;
            }
            const year = parseInt(isoDate.substr(0, 4), 10);
            const month = parseInt(isoDate.substr(5, 2), 10);
            const day = parseInt(isoDate.substr(8, 2), 10);
            const hours = parseInt(isoDate.substr(11, 2), 10);
            const minutes = parseInt(isoDate.substr(14, 2), 10);
            const seconds = parseInt(isoDate.substr(17, 2), 10);
            return new Date(year, month, day, hours, minutes, seconds);

        } catch (error) {
            return undefined;
        }
    }


    public static isIsoDate(str: string) {
        // tslint:disable-next-line: max-line-length
        return /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/.test(str);
    }

}
