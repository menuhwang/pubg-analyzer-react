import React from "react";

function MatchInfoContainerPlaceHolder() {
    return (
        <div className="card mb-4 h-100 placeholder-glow">
            <div className="card-header pt-4">
                <h4 className="card-title fw-bold col-6 placeholder"></h4>
            </div>
            <div className="card-body py-4">
                {/*맵*/}
                <div className="d-flex">
                    <span className="col-9">
                        <span className="col-1 placeholder"></span>
                    </span>
                    <span className="col-3">
                        <span className="col-12 placeholder"></span>
                    </span>
                </div>
                <hr/>
                {/*모드*/}
                <div className="d-flex">
                    <span className="col-10">
                        <span className="col-2 placeholder"></span>
                    </span>
                    <span className="col-2">
                        <span className="col-12 placeholder"></span>
                    </span>
                </div>
                <hr/>
                {/*시작 시간*/}
                <div className="d-flex">
                    <span className="col-6">
                        <span className="col-6 placeholder"></span>
                    </span>
                    <span className="col-6">
                        <span className="col-12 placeholder"></span>
                    </span>
                </div>
                <hr/>
                {/*플레이 시간*/}
                <div className="d-flex">
                    <span className="col-9">
                        <span className="col-6 placeholder"></span>
                    </span>
                    <span className="col-3">
                        <span className="col-12 placeholder"></span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MatchInfoContainerPlaceHolder;