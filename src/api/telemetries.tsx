import {KillLog} from "../types/KillLog";
import {useAxios} from "../hooks/api/useAxios";
import {ENDPOINT} from "../constants/api";
import {ApiResponse} from "../types/ApiResponse";
import {PhaseDamageChartResponse} from "../types/PhaseDamageChartResponse";
import {BarChartResponse} from "../types/BarChartResponse";
import {DamageLog} from "../types/DamageLog";

export function fetchGetKillLogs(
    matchId: string,
    playerName: string
): Promise<KillLog[]> {
    return useAxios.get(ENDPOINT.TELEMETRIES + `/${matchId}/player/${playerName}/kills`)
        .then(response => {
            const data: ApiResponse<KillLog[]> = response.data;
            return data.result;
        })
}

export function fetchGetPhaseDamageChart(
    matchId: string,
    playerName: string
): Promise<PhaseDamageChartResponse> {
    return useAxios.get(ENDPOINT.TELEMETRIES + `/${matchId}/player/${playerName}/phase-damage-chart`)
        .then(response => {
            const data: ApiResponse<PhaseDamageChartResponse> = response.data;
            return data.result;
        })
}

export function fetchGetContributeDamageChart(
    matchId: string,
    playerName: string
): Promise<BarChartResponse> {
    return useAxios.get(ENDPOINT.TELEMETRIES + `/${matchId}/player/${playerName}/contribute-damage-chart`)
        .then(response => {
            const data: ApiResponse<BarChartResponse> = response.data;
            return data.result;
        })
}

export function fetchGetDamagesOfKills(
    matchId: string,
    playerName: string
): Promise<DamageLog[]> {
    return useAxios.get(ENDPOINT.TELEMETRIES + `/${matchId}/player/${playerName}/kills/damages`)
        .then(response => {
            const data: ApiResponse<DamageLog[]> = response.data;
            return data.result;
        })
}

export function fetchGetDamageLogs(
    matchId: string,
    playerName: string
): Promise<DamageLog[]> {
    return useAxios.get(ENDPOINT.TELEMETRIES + `/${matchId}/player/${playerName}/damages`)
        .then(response => {
            const data: ApiResponse<DamageLog[]> = response.data;
            return data.result;
        })
}

export function fetchGetWeaponAccuracyChart(
    matchId: string,
    playerName: string
): Promise<BarChartResponse> {
    return useAxios.get(ENDPOINT.TELEMETRIES + `/${matchId}/player/${playerName}/weapon-accuracy-chart`)
        .then(response => {
            const data: ApiResponse<BarChartResponse> = response.data;
            return data.result;
        })
}
