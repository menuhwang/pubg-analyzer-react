export type Page<T> = {
    content: T[],
    size: number,
    first: boolean,
    last: boolean,
    totalPages: number,
    totalElements: number,
    previousPageNum?: number,
    nextPageNum?: number,
    displayPagesNum?: number,
    paginationStartNum?: number,
    paginationEndNum?: number,
}