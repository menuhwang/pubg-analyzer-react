import React from "react";
import KillInfoTablePlaceHolder from "./KillInfoTablePlaceHolder";
import KillDetailTablePlaceHolder from "./KillDetailTablePlaceHolder";

function KillListContainerPlaceHolder() {
    return (
        <div className="card placeholder-glow">
            <div className="card-header pt-4">
                <h4 className="card-title fw-bold col-2 placeholder"></h4>
            </div>
            <div className="card-body py-4">
                <KillInfoTablePlaceHolder />
                <KillDetailTablePlaceHolder />
            </div>
        </div>
    )
}

export default KillListContainerPlaceHolder;