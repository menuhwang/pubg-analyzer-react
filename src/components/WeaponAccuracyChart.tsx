import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, ChartOptions,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {BarChartResponse} from "../types/BarChartResponse";
import {fetchGetWeaponAccuracyChart} from "../api/telemetries";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type WeaponAccuracyChartProps = {
    matchId: string | undefined,
    playerName: string | undefined,
}

const options: ChartOptions<'bar'> = {
    indexAxis: "y" as const,
    elements: {
        bar: {
            borderRadius: Number.MAX_VALUE,
        },
    },
    interaction: {
        mode: "index" as const,
        intersect: true,
    },
    scales: {
        x: {
            ticks: {
                stepSize: 20
            },
        },
    },
};

function WeaponAccuracyChart(props: WeaponAccuracyChartProps) {
    const [weaponAccuracyChartData, setWeaponAccuracyChartData] = useState<BarChartResponse | null>(null);

    useEffect(() => {
        if (props.matchId === undefined || props.playerName === undefined) return;

        fetchGetWeaponAccuracyChart(props.matchId, props.playerName)
            .then(result => setWeaponAccuracyChartData(result))
            .catch(e => console.error(e));
    }, [props.matchId, props.playerName])

    if (weaponAccuracyChartData === null) return null;

    const data = {
        labels: weaponAccuracyChartData.labels,
        datasets: weaponAccuracyChartData.datasets
    };

    return (
        <Bar options={options} data={data} width={"100%"} height={"50%"} />
    )
}

export default WeaponAccuracyChart;
