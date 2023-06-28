import {useAxios} from "../hooks/api/useAxios";
import {ENDPOINT} from "../constants/api";
import {ApiResponse} from "../types/ApiResponse";
import {Page} from "../types/Page";
import {Match} from "../types/Match";

export function fetchGetMatches(
    page: number,
    size: number,
    setMatches: (matches: Match[]) => void,
    setTotal: (total: number) => void,
): void {
    useAxios.get(ENDPOINT.MATCHES, {
        params: {
            page,
            size
        }
    }).then(response => {
        const data: ApiResponse<Page<Match>> = response?.data;
        setMatches(data.result.content);
        setTotal(data.result.totalElements);
    }).catch(e => console.log(e))
}