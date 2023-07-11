import {MatchInfo} from "./MatchInfo";
import {MatchResult} from "./MatchResult";
import {Analyze} from "./Analyze";

export type Report = {
    matchInfo: MatchInfo
    matchResult: MatchResult
    data: Analyze
}