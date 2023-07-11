import React from "react";
import {MatchResult} from "../../types/MatchResult";

type MatchResultProps = {
    matchResult: MatchResult
}

function MatchResultContainer(props: MatchResultProps) {
    return (
        <div className="card mb-4 h-100">
            <div className="card-header pt-4">
                <h4 className="card-title fw-bold">매치 결과</h4>
            </div>
            <div className="card-body py-4">
                <div className="d-flex">
                    <div>랭킹</div>
                    <div className="ms-auto">
                        <span className="fw-bold">{props.matchResult.rank}</span>
                        <span className="text-muted">/</span>
                        <span className="text-muted">{props.matchResult.rosters}</span>
                    </div>
                </div>
                <hr/>
                <div className="d-flex">
                    <div>킬</div>
                    <div className="ms-auto fw-bold">{props.matchResult.kills}</div>
                </div>
                <hr/>
                <div className="d-flex">
                    <div>어시스트</div>
                    <div className="ms-auto fw-bold">{props.matchResult.assists}</div>
                </div>
                <hr/>
                <div className="d-flex">
                    <div>데미지</div>
                    <div className="ms-auto fw-bold">{(props.matchResult.damageDealt).toFixed(2)}</div>
                </div>
                <hr/>
                <div className="d-flex">
                    <div>팀원 부활</div>
                    <div className="ms-auto fw-bold">{props.matchResult.revives}</div>
                </div>
            </div>
        </div>
    )
}

export default MatchResultContainer;