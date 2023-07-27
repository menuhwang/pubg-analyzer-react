import {MatchInfo} from "./MatchInfo";
import {Roster} from "./Roster";
import {Participant} from "./Participant";

export type MatchStats = {
    match: MatchInfo
    roster: Roster
    stats: Participant
}