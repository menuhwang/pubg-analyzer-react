import React, {useEffect, useState} from "react";
import NavbarProvider from "../../components/navbar/NavbarProvider";
import {Link, useLocation, useParams} from "react-router-dom";
import MemberSelect from "./MemberSelect";
import MatchInfoContainer from "./MatchInfoContainer";
import MatchResultContainer from "./MatchResultContainer";
import KillList from "./KillList";
import AnalyzeContainer from "./AnalyzeContainer";
import {Report} from "../../types/Report";
import {fetchGetMatchReport} from "../../api/report";
import './style.css';

function ReportPage() {
    const path = useLocation();
    const {matchId, nickname} = useParams<string>();
    const [report, setReport] = useState<Report>();

    useEffect(() => {
        fetchGetMatchReport(matchId, nickname)
            .then(result => setReport(result))
            .catch(e => console.error(e));
    }, [path])

    if (report?.data === undefined || report?.matchInfo === undefined || report?.matchResult === undefined) return null;

    return (
        <>
            <NavbarProvider isAdmin={false} />
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
                                <MemberSelect matchId={report!.matchInfo.id} member={report!.matchResult.member} />
                            </div>
                        </div>
                        <div className="content vstack gap-4">
                            {/*!-- 정보 --*/}
                            <div className="vstack gap-4">
                                {/*!-- 매치 --*/}
                                <div className="row g-4">
                                    {/*!-- 매치 정보 --*/}
                                    <div className="col-md-6">
                                        <MatchInfoContainer matchInfo={report!.matchInfo} />
                                    </div>
                                    {/*!-- 매치 결과 --*/}
                                    <div className="col-md-6">
                                        <MatchResultContainer matchResult={report!.matchResult} />
                                    </div>
                                </div>
                                {/*!-- 킬 목록 --*/}
                                <div className="row">
                                    <div className="col">
                                        <KillList matchCreatedAt={report!.matchInfo.createdAt} killLog={report!.data.killLog} player={report!.data.player} bot={report!.data.bot} />
                                    </div>
                                </div>
                            </div>
                            {/*!-- 분석 --*/}
                            <AnalyzeContainer matchCreatedAt={report!.matchInfo.createdAt}
                                     player={nickname!}
                                     member={report!.matchResult.member!}
                                     analyze={report!.data} />
                        </div>
                    </div>
                    {/*!--sidebar:right--*/}
                    <aside className="col-lg-2"></aside>
                </div>
            </div>
        </>
    )
}

export default ReportPage;