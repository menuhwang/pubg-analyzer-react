import {Page} from "./Page";
import {MatchStats} from "./MatchStats";

export type SearchPlayer = {
    player: string | undefined,
    matches: Page<MatchStats> | undefined
}