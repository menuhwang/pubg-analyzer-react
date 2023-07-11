import {KillLog} from "./KillLog";
import {DamageLog} from "./DamageLog";

export type Analyze = {
    killLog: KillLog[]
    damageLog: DamageLog[]
    player: number
    bot: number
    victimPlayerDamageDealt: Map<string, Map<string, number>>
    victimDamageLog: Map<string, DamageLog[]>
    charts: {
        phaseDamageChart: {
            datasets: {
                data: number[]
            }
        },
        contributeDamageChart: {
            datasets: {
                "data": number[]
                "label": string
            }[]
            labels: string[]
        }
    }
}