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

    return (
        <Doughnut options={options} data={damageChartData} />
    );
}

export default PhaseDamageChart;