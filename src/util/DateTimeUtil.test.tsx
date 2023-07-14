import DateTimeUtil from "./DateTimeUtil";

describe('calculate datetime offset to min and sec', () => {
    it ('case 1', () => {
        const datetime1 = '2023-07-05T12:00:00.000';
        const datetime2 = '2023-07-05T12:10:10.000';

        const offsetMinSec = DateTimeUtil.offsetToMinSec(datetime1, datetime2);

        expect(offsetMinSec).toEqual('10:10');
    });
    it ('case 2', () => {
        const datetime1 = '2023-07-05T12:49:34';
        const datetime2 = '2023-07-05T13:02:04.985';

        const offsetMinSec = DateTimeUtil.offsetToMinSec(datetime1, datetime2);

        expect(offsetMinSec).toEqual('12:30');
    });
})