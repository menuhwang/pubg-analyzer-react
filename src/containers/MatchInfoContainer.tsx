import React, {useContext} from "react";
import DateTimeUtil from "../util/DateTimeUtil";
import MatchInfoContainerPlaceHolder from "../components/placeholder/MatchInfoContainerPlaceHolder";
import {MatchInfoContext} from "../contexts/MatchInfoContextProvider";

function MatchInfoContainer() {
    const matchInfo = useContext(MatchInfoContext);

    if (matchInfo === null) return <MatchInfoContainerPlaceHolder />;

    return (
        <div className="card mb-4 h-100">
            <div className="card-header pt-4">
                <h4 className="card-title fw-bold">매치 정보</h4>
            </div>
            <div className="card-body py-4">
                    <div className="d-flex">
                        <div>맵</div>
                        <div className="ms-auto fw-bold">{matchInfo.mapName.kor}</div>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <div>모드</div>
                        <div className="ms-auto fw-bold">{matchInfo.gameMode.kor}</div>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <div>시작 시간</div>
                        <div className="ms-auto fw-bold">{DateTimeUtil.parse(matchInfo.createdAt)}</div>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <div>플레이 시간</div>
                        <div className="ms-auto fw-bold">{(matchInfo.duration / 60).toFixed() + ':' + (matchInfo.duration % 60 < 10 ? `0${matchInfo.duration % 60}` : matchInfo.duration % 60)}</div>
                    </div>
            </div>
        </div>
    )
}

export default MatchInfoContainer;