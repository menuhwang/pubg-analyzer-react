function parse(datetime: string): string {
    const date: Date = parseToUTC(datetime);
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}`;
}

function parseToUTC(datetime: string): Date {
    const date: Date = new Date(datetime);

    return new Date(Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ))
}

function offset(datetime: string): string {
    const date: Date = parseToUTC(datetime);
    let offset: number = Date.now() - date.getTime();

    offset /= 1000; // 초
    if (offset < 60) return '방금 전'; // 1분 미만
    offset /= 60; // 분
    if (offset < 60) return offset.toFixed() + '분 전'; // 1시간 미만
    offset /= 60; // 시
    if (offset < 24) return offset.toFixed() + '시간 전'; // 1일 미만
    offset /= 24; // 일
    if (offset < 15) return offset.toFixed() + '일 전'; // 15일 미만
    return '오래 전';
}

function offsetToMinSec(datetime1: string, datetime2: string): string {
    const timestamp1 = parseToUTC(datetime1).getTime();
    const timestamp2 = parseToUTC(datetime2).getTime();

    let offset = timestamp2 - timestamp1;

    offset /= 1000;

    return `${(offset / 60).toFixed()}:${offset % 60 < 10 ? `0${(offset % 60).toFixed()}` : (offset % 60).toFixed()}`;
}

const DateTimeUtil = {
    parse,
    offset,
    offsetToMinSec
}

export default DateTimeUtil;