import React from "react";
import {DamageLog} from "../types/DamageLog";
import DateTimeUtil from "../util/DateTimeUtil";

type KillDamageLogTableProps = {
    matchCreatedAt: string
    damageLog: DamageLog[]
}

function KillDamageLogTable(props: KillDamageLogTableProps) {
    const tr = props.damageLog.map(log =>
        <tr key={log.timestamp}>
            <td>{DateTimeUtil.offsetToMinSec(props.matchCreatedAt, log.timestamp)}</td>
            <td>{log.attacker.name}</td>
            <td>{log.damageReason.kor}</td>
            <td>{log.damageCauserName.kor}</td>
            {
                log.damage === 0 ?
                    <td colSpan={3}>확킬</td>
                    :
                    <>
                        <td>{log.damage.toFixed(2)}</td>
                        <td>{(log.victim.health!).toFixed(2)}</td>
                        <td>{(log.victim.health! - log.damage).toFixed(2)}</td>
                    </>
            }
        </tr>
    )
    return (
        <div className="table-responsive">
            <table className="table align-middle">
                <thead className="align-middle">
                <tr>
                    <th rowSpan={2} scope="col">Time</th>
                    <th rowSpan={2} scope="col">Attacker</th>
                    <th rowSpan={2} scope="col">Reason</th>
                    <th rowSpan={2} scope="col">Weapon</th>
                    <th rowSpan={2} scope="col">Damage</th>
                    <th colSpan={2} scope="col"
                        className="text-center border-0">Health
                    </th>
                </tr>
                <tr>
                    <th scope="col">Before</th>
                    <th scope="col">After</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {tr}
                </tbody>
            </table>
        </div>
    )
}

export default KillDamageLogTable;