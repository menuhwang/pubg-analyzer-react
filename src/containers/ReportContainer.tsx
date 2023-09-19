import React from "react";
import {Link, useParams} from "react-router-dom";
import MemberSelect from "../components/MemberSelect";
import MatchInfoContainer from "./MatchInfoContainer";
import MatchResultContainer from "./MatchResultContainer";
import KillListContainer from "./KillListContainer";
import AnalyzeContainer from "./AnalyzeContainer";
import AllOwnDamageContextProvider from "../contexts/AllOwnDamageContextProvider";

function ReportContainer() {
    const {matchId, nickname} = useParams<string>();

    return (
        <div className="report-container container-fluid py-md-4">
            <div className="row g-4">
                {/*!--sidebar:left--*/}
                <aside className="col-lg-2"></aside>
                <div className="col-lg-8">
                    <div className="row mb-4 g-4">
                        <div className="col">
                            <Link className="h3 m-0 text-decoration-none text-dark fw-bold" role="button"
                                  to={`/player/${nickname}`}>{nickname}</Link>
                        </div>
                        <div className="col-md-4">
                            <MemberSelect matchId={matchId} playerName={nickname} />
                        </div>
                    </div>
                    <div className="content vstack gap-4">
                        {/*!-- 정보 --*/}
                        <div className="vstack gap-4">
                            {/*!-- 매치 --*/}
                            <div className="row g-4">
                                {/*!-- 매치 정보 --*/}
                                <div className="col-md-6">
                                    <MatchInfoContainer />
                                </div>
                                {/*!-- 매치 결과 --*/}
                                <div className="col-md-6">
                                    <MatchResultContainer matchId={matchId} playerName={nickname} />
                                </div>
                            </div>
                            {/*!-- 킬 목록 --*/}
                            <div className="row">
                                <div className="col">
                                    <KillListContainer />
                                </div>
                            </div>
                        </div>
                        {/*!-- 분석 --*/}
                        <AllOwnDamageContextProvider>
                            <AnalyzeContainer matchId={matchId} playerName={nickname}/>
                        </AllOwnDamageContextProvider>
                    </div>
                </div>
                {/*!--sidebar:right--*/}
                <aside className="col-lg-2"></aside>
            </div>
        </div>
    )
}

export default ReportContainer;