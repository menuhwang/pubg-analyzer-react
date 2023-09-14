import {useAxios} from "../hooks/api/useAxios";
import {ENDPOINT} from "../constants/api";
import {ApiResponse} from "../types/ApiResponse";
import {Page} from "../types/Page";
import {Match} from "../types/Match";
import {SearchPlayer} from "../types/SearchPlayer";
import {MatchStats} from "../types/MatchStats";
import {Roster} from "../types/Roster";
import {MatchInfo} from "../types/MatchInfo";

export function fetchGetMatches(
    page: number,
    size: number,
    setResult: (data: Page<Match>) => void,
): void {
    useAxios.get(ENDPOINT.MATCHES, {
        params: {
            page,
            size
        }
    }).then(response => {
        const data : ApiResponse<Page<Match>> = response.data;
        setResult(data.result);
    }).catch(e => console.log(e))
}

export function fetchGetMatchesByPlayer(
    nickname: string | undefined,
    page: number,
    size: number,
    setResult: (data: Page<MatchStats> | undefined) => void
): Promise<void> {
    return useAxios.get(ENDPOINT.MATCHES + `/player/${nickname}`, {
        params: {
            page,
            size
        }
    }).then(response => {
        const data : ApiResponse<SearchPlayer> = response.data;
        setResult(data.result.matches);
    }).catch(e => console.log(e))
}

export function fetchGetRoster(
    matchId: string,
    playerName: string,
) : Promise<Roster> {
    return useAxios.get(ENDPOINT.MATCHES + `/${matchId}/player/${playerName}/roster`)
        .then(response => {
            const data: ApiResponse<Roster> = response.data;
            return data.result;
        })
}

export function fetchGetMatchInfo(
    matchId: string
) : Promise<MatchInfo> {
    return useAxios.get(ENDPOINT.MATCHES + `/${matchId}/info`)
        .then(response => {
            const data: ApiResponse<MatchInfo> = response.data;
            return data.result;
        })
}
