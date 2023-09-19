import React, {useContext, useEffect, useState} from "react";
import KillInfoTable from "../components/KillInfoTable";
import KillDetailTable from "../components/KillDetailTable";
import KillListContainerPlaceHolder from "../components/placeholder/KillListContainerPlaceHolder";
import {KillLogsContext} from "../contexts/KillLogsContextProvider";
import {MatchInfoContext} from "../contexts/MatchInfoContextProvider";

function KillListContainer() {
    const killLogs = useContext(KillLogsContext);
    const matchInfo = useContext(MatchInfoContext);
    const [matchCreatedAt, setMatchCreatedAt] = useState<string | null>(null);
    const [botCnt, setBotCnt] = useState<number>(0);

    useEffect(() => {
        if (matchInfo === undefined || matchInfo?.createdAt === undefined) return;
        setMatchCreatedAt(matchInfo.createdAt);
    }, [matchInfo])

    useEffect(() => {
        if (killLogs === null) return;
        let botCntTemp = 0;

        killLogs.forEach(killLog => {
            if (killLog.victim.bot) botCntTemp++;
        });
        setBotCnt(botCntTemp);
    }, [killLogs])

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