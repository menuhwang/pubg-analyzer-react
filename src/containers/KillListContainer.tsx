import React, {useEffect, useState} from "react";
import KillInfoTable from "../components/KillInfoTable";
import KillDetailTable from "../components/KillDetailTable";
import {KillLog} from "../types/KillLog";
import {fetchGetKillLogs} from "../api/telemetries";
import {fetchGetMatchInfo} from "../api/matches";
import KillListContainerPlaceHolder from "../components/placeholder/KillListContainerPlaceHolder";

type KillListProps = {
    matchId: string | undefined,
    playerName: string | undefined,
}

function KillListContainer(props: KillListProps) {
    const [killLogs, setKillLogs] = useState<KillLog[] | null>(null);
    const [matchCreatedAt, setMatchCreatedAt] = useState<string | null>(null);
    const [botCnt, setBotCnt] = useState<number>(0);

    useEffect(() => {
        if (props.matchId === undefined) return;

        fetchGetMatchInfo(props.matchId)
            .then(result => setMatchCreatedAt(result.createdAt))
            .catch(e => console.error(e));
    }, [props.matchId])

    useEffect(() => {
        if (props.matchId === undefined || props.playerName === undefined) return;
        let botCntTemp = 0;

        fetchGetKillLogs(props.matchId, props.playerName)
            .then(result => {
                result.forEach(killLog => {
                    if (killLog.victim.bot) botCntTemp++;
                });
                setBotCnt(botCntTemp);
                setKillLogs(result)
            })
            .catch(e => console.error(e));
    }, [props.matchId, props.playerName])

    if (killLogs === null || matchCreatedAt === null) return <KillListContainerPlaceHolder />;

    return (
        <div className="card">
            <div className="card-header pt-4">
                <h4 className="card-title fw-bold">킬 목록</h4>
            </div>
            <div className="card-body py-4">
                <KillInfoTable kills={killLogs.length} player={killLogs.length - botCnt} bot={botCnt} />
                <KillDetailTable matchCreatedAt={matchCreatedAt} killLog={killLogs} />
            </div>
        </div>
    )
}

export default KillListContainer;