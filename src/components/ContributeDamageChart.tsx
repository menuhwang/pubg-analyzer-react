import React, {useEffect, useState} from 'react';
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
import {ContributeDamageChartResponse} from "../types/ContributeDamageChartResponse";
import {fetchGetContributeDamageChart} from "../api/telemetries";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type ContributeDamageChartProps = {
    matchId: string | undefined,
    playerName: string | undefined,
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
    const [contributeDamageChartData, setContributeDamageChartData] = useState<ContributeDamageChartResponse | null>(null);

    useEffect(() => {
        if (props.matchId === undefined || props.playerName === undefined) return;

        fetchGetContributeDamageChart(props.matchId, props.playerName)
            .then(result => setContributeDamageChartData(result))
            .catch(e => console.error(e));
    }, [props.matchId, props.playerName])

    if (contributeDamageChartData === null) return null;

    const data = {
        labels: contributeDamageChartData.labels,
        datasets: contributeDamageChartData.datasets
    };

    return (
        <Bar options={options} data={data} width={"100%"} height={"100%"} />
    )
}

export default ContributeDamageChart;