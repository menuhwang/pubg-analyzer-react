import {KillLog} from "../types/KillLog";
import {useAxios} from "../hooks/api/useAxios";
import {ENDPOINT} from "../constants/api";
import {ApiResponse} from "../types/ApiResponse";

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
