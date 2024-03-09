import React from "react";
import {KillLog} from "../types/KillLog";
import DateTimeUtil from "../util/DateTimeUtil";
import {Link, useParams} from "react-router-dom";

type KillDetailTableProps = {
    matchCreatedAt: string
    killLog: KillLog[]
}

function KillDetailTable(props: KillDetailTableProps) {
    const {matchId} = useParams();
    if (props.killLog === undefined || props.killLog.length === 0) return null;

    const killTr = props.killLog.map((kill, index) => {
        const victim = kill.victim.name;
        const url = `/report/match/${matchId}/player/${victim}`;

        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{DateTimeUtil.offsetToMinSec(props.matchCreatedAt, kill.timestamp)}</td>
                <td>{kill.victim.bot ? victim : <Link to={url}>{victim}</Link>}</td>
                <td>{kill.killInfo.damageCauserName.kor}</td>
                <td>{kill.victim.bot ? <i className="fa-solid fa-circle-check"></i> : null}</td>
            </tr>
        )
    })
    return (
        <div className="table-responsive">
            <table className="table align-middle">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Time</th>
                    <th scope="col">Victim</th>
                    <th scope="col">Weapon</th>
                    <th scope="col">Bot</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {killTr}
                </tbody>
            </table>
        </div>
    )
}

export default KillDetailTable;