export type PhaseDamageChartResponse = {
    labels: string[]
    datasets: {
        label: string,
        data: number[]
    }[]
}