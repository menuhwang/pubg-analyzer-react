import {ShareLink} from "../types/ShareLink";
import {useAxios} from "../hooks/api/useAxios";
import {ENDPOINT} from "../constants/api";
import {ApiResponse} from "../types/ApiResponse";

export function fetchPostLinkShare(
    path: string
): Promise<ShareLink> {
    return useAxios.post(`${ENDPOINT.SHARE}`, {
        link: path
    }, {
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        const data: ApiResponse<ShareLink> = response.data;
        return data.result;
    });
}

export function redirectShareLink(
    id: string
): Promise<ShareLink> {
    return useAxios.get(`${ENDPOINT.SHARE}/${id}`).then(response => {
        const data: ApiResponse<ShareLink> = response.data;
        return data.result;
    });
}
