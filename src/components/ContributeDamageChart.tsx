import React from 'react';
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Chart as ChartJS} from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type ContributeDamageChartProps = {
    datasets: {
        data: number[]
        label: string
    }[]
    labels: string[]
}

const options = {
    datasets: {
        bar: {
            barPercentage: 0.5,
            categoryPercentage: 0.5,
        }
    },
    elements: {
        bar: {
            borderRadius: Number.MAX_VALUE,
        },
    },
    interaction: {
        mode: "index" as const,
        intersect: false,
    },
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            gridLines: {
                display: false
            },
            ticks: {
                stepSize: 20
            },
            stacked: true,
        },
        x: {
            gridLines: {
                color: "transparent"
            },
            stacked: true,
        }
    }
};

function ContributeDamageChart(props: ContributeDamageChartProps) {
    const data = {
        labels: props.labels,
        datasets: props.datasets
    };

    return (
        <Bar options={options} data={data} width={"100%"} height={"100%"} />
    )
}

export default ContributeDamageChart;