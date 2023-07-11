import React from "react";
import KillInfoTable from "./KillInfoTable";
import KillDetailTable from "./KillDetailTable";
import {KillLog} from "../../types/KillLog";

type KillListProps = {
    matchCreatedAt: string
    killLog: KillLog[]
    player: number
    bot: number
}

function KillList(props: KillListProps) {
    return (
        <div className="card">
            <div className="card-header pt-4">
                <h4 className="card-title fw-bold">킬 목록</h4>
            </div>
            <div className="card-body py-4">
                <KillInfoTable kills={props.killLog.length} player={props.player} bot={props.bot} />
                <KillDetailTable matchCreatedAt={props.matchCreatedAt} killLog={props.killLog} />
            </div>
        </div>
    )
}

export default KillList;