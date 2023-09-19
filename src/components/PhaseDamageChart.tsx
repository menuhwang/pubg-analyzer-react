import React, {useEffect, useState} from 'react';
import {ArcElement, Tooltip, Legend} from 'chart.js';
import {Chart as ChartJS} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import {PhaseDamageChartResponse} from "../types/PhaseDamageChartResponse";
import {fetchGetPhaseDamageChart} from "../api/telemetries";

ChartJS.register(ArcElement, Tooltip, Legend);

type PhaseDamageChartProps = {
    matchId: string | undefined,
    playerName: string | undefined,
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
}

function PhaseDamageChart(props: PhaseDamageChartProps) {
    const [damageChartData, setDamageChartDate] = useState<PhaseDamageChartResponse | null>(null);

    useEffect(() => {
        if (props.matchId === undefined || props.playerName === undefined) return;

        fetchGetPhaseDamageChart(props.matchId, props.playerName)
            .then(result => setDamageChartDate(result))
            .catch(e => console.error(e));
    }, [props.matchId, props.playerName])

    if (damageChartData === null) return null;

    const data = {
        labels: ['0 페이즈', '1 페이즈', '2 페이즈', '3 페이즈', '4 페이즈', '5 페이즈', '6 페이즈', '7 페이즈', '8 페이즈', '9 페이즈'],
        datasets: [{
            data: damageChartData.data
        }]
    }

    return (
        <Doughnut options={options} data={data} />
    );
}

export default PhaseDamageChart;