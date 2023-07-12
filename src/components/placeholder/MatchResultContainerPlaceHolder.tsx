import React from "react";

function MatchResultContainerPlaceHolder() {
    return (
        <div className="card mb-4 h-100 placeholder-glow">
            <div className="card-header pt-4">
                {/*매치 결과*/}
                <h4 className="card-title fw-bold col-6 placeholder"></h4>
            </div>
            <div className="card-body py-4">
                {/*랭킹*/}
                <div className="d-flex">
                    <span className="col-10">
                        <span className="col-2 placeholder"></span>
                    </span>
                    <span className="col-2">
                        <span className="col-12 placeholder"></span>
                    </span>
                </div>
                <hr/>
                {/*킬*/}
                <div className="d-flex">
                    <span className="col-11">
                        <span className="col-1 placeholder"></span>
                    </span>
                    <span className="col-1">
                        <span className="col-12 placeholder"></span>
                    </span>
                </div>
                <hr/>
                {/*어시스트*/}
                <div className="d-flex">
                    <span className="col-11">
                        <span className="col-3 placeholder"></span>
                    </span>
                    <span className="col-1">
                        <span className="col-12 placeholder"></span>
                    </span>
                </div>
                <hr/>
                {/*데미지*/}
                <div className="d-flex">
                    <span className="col-10">
                        <span className="col-3 placeholder"></span>
                    </span>
                    <span className="col-2">
                        <span className="col-12 placeholder"></span>
                    </span>
                </div>
                <hr/>
                {/*팀원 부활*/}
                <div className="d-flex">
                    <span className="col-11">
                        <span className="col-4 placeholder"></span>
                    </span>
                    <span className="col-1">
                        <span className="col-12 placeholder"></span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MatchResultContainerPlaceHolder;