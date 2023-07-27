import {useAxios} from "../hooks/api/useAxios";
import {ENDPOINT} from "../constants/api";

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
