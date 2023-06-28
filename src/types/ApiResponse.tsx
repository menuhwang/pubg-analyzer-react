export type ApiResponse<T> = {
    status: number,
    success: boolean,
    result: T
}