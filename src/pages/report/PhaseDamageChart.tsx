import React from 'react';
import {ArcElement, Tooltip, Legend} from 'chart.js';
import {Chart as ChartJS} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type PhaseDamageChartProps = {
    datasets: {
        data: number[]
    }
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
}

function PhaseDamageChart(props: PhaseDamageChartProps) {
    const data = {
        labels: ['0 페이즈', '1 페이즈', '2 페이즈', '3 페이즈', '4 페이즈', '5 페이즈', '6 페이즈', '7 페이즈', '8 페이즈', '9 페이즈'],
        datasets: [{
            data: props.datasets.data
        }]
    }
    return (
        <Doughnut options={options} data={data} />
    );
}

export default PhaseDamageChart;