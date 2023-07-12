import {GameMode} from "./GameMode";
import {MapName} from "./MapName";
import {MatchType} from "./MatchType";

export type MatchInfo = {
    id: string,
    matchType: MatchType,
    map: MapName,
    mode: GameMode,
    createdAt: string,
    duration: number
}