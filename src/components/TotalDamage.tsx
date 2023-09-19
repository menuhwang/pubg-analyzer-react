import React, {useEffect, useState} from "react";
import TotalDamageLogTable from "./TotalDamageLogTable";
import {DamageLog} from "../types/DamageLog";
import {fetchGetMatchInfo} from "../api/matches";
import {fetchGetDamageLogs} from "../api/telemetries";

type TotalDamageProps = {
    matchId: string
    playerName: string
}

function TotalDamage(props: TotalDamageProps) {
    const [matchCreatedAt, setMatchCreatedAt] = useState<string | null>(null);
    const [damageLogs, setDamageLogs] = useState<DamageLog[] | null>(null);

    useEffect(() => {
        if (props.matchId === undefined) return;

        fetchGetMatchInfo(props.matchId)
            .then(result => setMatchCreatedAt(result.createdAt))
            .catch(e => console.error(e));
    }, [props.matchId])

    useEffect(() => {
        if (props.matchId === undefined || props.playerName === undefined) return;

        fetchGetDamageLogs(props.matchId, props.playerName)
            .then(result => setDamageLogs(result))
            .catch(e => console.error(e));
    }, [props.matchId, props.playerName])

    if (matchCreatedAt === null || damageLogs === null || damageLogs.length < 1) return null;

    return (
        <div className="row">
            <div className="col">
                <div className="accordion" id="damages-accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="damages-heading">
                            <button className="accordion-button collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#damages-collapse"
                                    aria-expanded="false" aria-controls="damages-collapse">
                                전체 데미지 로그
                            </button>
                        </h2>
                        <div id="damages-collapse" className="accordion-collapse collapse"
                             aria-labelledby="damages-heading"
                             data-bs-parent="#damages-accordion">
                            <div className="accordion-body">
                                <TotalDamageLogTable matchCreatedAt={matchCreatedAt} damageLog={damageLogs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalDamage;