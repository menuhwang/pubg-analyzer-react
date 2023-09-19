export type ContributeDamageChartResponse = {
    labels: string[],
    datasets: {
        label: string,
        data: number[]
    }[]
}