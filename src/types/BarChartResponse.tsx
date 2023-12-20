export type BarChartResponse = {
    labels: string[],
    datasets: {
        label: string,
        data: number[]
    }[]
}