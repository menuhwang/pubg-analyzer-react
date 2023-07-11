import {Character} from "./Character";
import {DamageTypeCategory} from "./DamageTypeCategory";
import {DamageReason} from "./DamageReason";
import {DamageCauserName} from "./DamageCauserName";

export type DamageLog = {
    timestamp: string
    attacker: Character
    victim: Character
    damageTypeCategory: DamageTypeCategory;
    damageReason: DamageReason;
    damageCauserName: DamageCauserName;
    damage: number;
    phase: number;
}