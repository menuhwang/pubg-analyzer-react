import React from "react";
import MatchInfoContainerPlaceHolder from "./MatchInfoContainerPlaceHolder";
import MatchResultContainerPlaceHolder from "./MatchResultContainerPlaceHolder";
import KillListContainerPlaceHolder from "./KillListContainerPlaceHolder";

function ReportContainerPlaceHolder() {
    return (
        <div className="report-container container-fluid py-md-4 placeholder-glow">
            <div className="row g-4">
                {/*!--sidebar:left--*/}
                <aside className="col-lg-2"></aside>
                <div className="col-lg-8">
                    <div className="row mb-4 g-4">
                        <div className="col">
                            <span className="col-3 placeholder"></span>
                        </div>
                        <div className="col-md-4">
                            <span className="col-12 placeholder"></span>
                        </div>
                    </div>
                    <div className="content vstack gap-4">
                        {/*!-- 정보 --*/}
                        <div className="vstack gap-4">
                            {/*!-- 매치 --*/}
                            <div className="row g-4">
                                {/*!-- 매치 정보 --*/}
                                <div className="col-md-6">
                                    <MatchInfoContainerPlaceHolder />
                                </div>
                                {/*!-- 매치 결과 --*/}
                                <div className="col-md-6">
                                    <MatchResultContainerPlaceHolder />
                                </div>
                            </div>
                            {/*!-- 킬 목록 --*/}
                            <div className="row">
                                <div className="col">
                                    <KillListContainerPlaceHolder />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*!--sidebar:right--*/}
                <aside className="col-lg-2"></aside>
            </div>
        </div>
    )
}

export default ReportContainerPlaceHolder;