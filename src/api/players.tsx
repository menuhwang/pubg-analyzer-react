import {Page} from "../types/Page";
import {useAxios} from "../hooks/api/useAxios";
import {ENDPOINT} from "../constants/api";
import {ApiResponse} from "../types/ApiResponse";
import {Participant} from "../types/Participant";
import {SearchPlayer} from "../types/SearchPlayer";

export function fetchSearchPlayer(
    nickname: string | undefined,
    page: number,
    size: number,
    setResult: (data: Page<Participant> | undefined) => void
): void {
    if (nickname === undefined) {
        alert('닉네임을 입력해주세요.');
        return;
    }
    useAxios.get(ENDPOINT.PLAYERS + `/${nickname}`, {
        params: {
            page,
            size
        }
    }).then(response => {
        const data : ApiResponse<SearchPlayer> = response.data;
        setResult(data.result.matches);
    }).catch(e => console.log(e))
}

export function fetchUpdateMatchHistory(
    nickname: string | undefined,
    callback: () => void
): Promise<void> {
    return useAxios.patch(ENDPOINT.PLAYERS + `/${nickname}`)
        .then(() => {
            callback();
    }).catch(() => {
        alert('전적 갱신에 실패했습니다. 잠시 후 다시 시도해주세요.')
    })
}