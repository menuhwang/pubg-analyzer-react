import React, {useEffect, useState} from "react";
import {MatchResult} from "../types/MatchResult";
import MatchResultContainerPlaceHolder from "../components/placeholder/MatchResultContainerPlaceHolder";
import {fetchGetMatchResult} from "../api/matches";

type MatchResultProps = {
    matchId: string | undefined,
    playerName: string | undefined
}

function MatchResultContainer(props: MatchResultProps) {
    const [matchResult, setMatchResult] = useState<MatchResult | null>(null);

    useEffect(() => {
        if (props.matchId === undefined || props.playerName === undefined) return;

        fetchGetMatchResult(props.matchId, props.playerName)
            .then(result => {
                setMatchResult(result);
            }).catch(e => console.error(e));
    }, [props.matchId, props.playerName])

    if (matchResult === null) return <MatchResultContainerPlaceHolder />

    return (
        <div className="card mb-4 h-100">
            <div className="card-header pt-4">
                <h4 className="card-title fw-bold">매치 결과</h4>
            </div>
            <div className="card-body py-4">
                <div className="d-flex">
                    <div>랭킹</div>
                    <div className="ms-auto">
                        <span className="fw-bold">{matchResult.rank}</span>
                        <span className="text-muted">/</span>
                        <span className="text-muted">{matchResult.rosters}</span>
                    </div>
                </div>
                <hr/>
                <div className="d-flex">
                    <div>킬</div>
                    <div className="ms-auto fw-bold">{matchResult.kills}</div>
                </div>
                <hr/>
                <div className="d-flex">
                    <div>어시스트</div>
                    <div className="ms-auto fw-bold">{matchResult.assists}</div>
                </div>
                <hr/>
                <div className="d-flex">
                    <div>데미지</div>
                    <div className="ms-auto fw-bold">{(matchResult.damageDealt).toFixed(2)}</div>
                </div>
                <hr/>
                <div className="d-flex">
                    <div>팀원 부활</div>
                    <div className="ms-auto fw-bold">{matchResult.revives}</div>
                </div>
            </div>
        </div>
    )
}

export default MatchResultContainer;