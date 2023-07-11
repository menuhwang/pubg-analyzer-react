import {useAxios} from "../hooks/api/useAxios";
import {ENDPOINT} from "../constants/api";
import {ApiResponse} from "../types/ApiResponse";
import {Report} from "../types/Report";

export function fetchGetMatchReport(
    matchId: string | undefined,
    player: string | undefined
): Promise<Report> {
    return useAxios.get(`${ENDPOINT.REPORT}/match/${matchId}/player/${player}`)
        .then(response => {
            const data: ApiResponse<Report> = response.data;
            return data.result;
        });
}