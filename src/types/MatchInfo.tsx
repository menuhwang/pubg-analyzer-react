import {GameMode} from "./GameMode";
import {MapName} from "./MapName";

export type MatchInfo = {
    id: string,
    map: MapName,
    mode: GameMode,
    createdAt: string,
    duration: number
}