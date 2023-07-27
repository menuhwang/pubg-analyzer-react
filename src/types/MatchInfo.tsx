import {GameMode} from "./GameMode";
import {MapName} from "./MapName";
import {MatchType} from "./MatchType";

export type MatchInfo = {
    id: string,
    matchType: MatchType,
    mapName: MapName,
    gameMode: GameMode,
    createdAt: string,
    duration: number
    isCustomMatch: boolean
    rosters: number
}