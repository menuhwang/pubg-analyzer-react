function parse(datetime: string): string {
    const date: Date = parseToUTC(datetime);

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}

function parseToUTC(datetime: string): Date {
    const date: Date = new Date(datetime);

    const utc = new Date(Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ))

    console.log(utc.toUTCString());

    return utc;
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

const DateTimeUtil = {
    parse,
    offset
}

export default DateTimeUtil;