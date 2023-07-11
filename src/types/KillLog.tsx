import {DamageInfo} from "./DamageInfo";
import {Character} from "./Character";

export type KillLog = {
    timestamp: string
    victim: Character
    dBNOMaker: Character
    dBNOInfo: DamageInfo
    finisher: Character
    finishInfo: DamageInfo
    killer: Character
    killInfo: DamageInfo
    suicide: boolean
}