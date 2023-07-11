import {DamageReason} from "./DamageReason";
import {DamageTypeCategory} from "./DamageTypeCategory";
import {DamageCauserName} from "./DamageCauserName";

export type DamageInfo = {
    damageReason: DamageReason
    damageTypeCategory: DamageTypeCategory
    damageCauserName: DamageCauserName
    distance: number
}