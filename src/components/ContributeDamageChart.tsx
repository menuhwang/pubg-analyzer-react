import React from 'react';
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, Interaction,
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
        "data": number[]
        "label": string
    }[]
    labels: string[]
}

const options = {
    dataset: {
        barPercentage: .5,
        categoryPercentage: .5,
        borderRadius: Number.MAX_VALUE,

        interaction: {
            intersect: false,
            mode: Interaction.modes.index,
        },
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