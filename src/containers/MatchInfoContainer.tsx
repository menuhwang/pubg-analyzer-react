import React from "react";
import {MatchInfo} from "../types/MatchInfo";
import DateTimeUtil from "../util/DateTimeUtil";

type MatchInfoProps = {
    matchInfo: MatchInfo
}

function MatchInfoContainer(props: MatchInfoProps) {
    return (
        <div className="card mb-4 h-100">
            <div className="card-header pt-4">
                <h4 className="card-title fw-bold">매치 정보</h4>
            </div>
            <div className="card-body py-4">
                    <div className="d-flex">
                        <div>맵</div>
                        <div className="ms-auto fw-bold">{props.matchInfo.map.kor}</div>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <div>모드</div>
                        <div className="ms-auto fw-bold">{props.matchInfo.mode.kor}</div>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <div>시작 시간</div>
                        <div className="ms-auto fw-bold">{DateTimeUtil.parse(props.matchInfo.createdAt)}</div>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <div>플레이 시간</div>
                        <div className="ms-auto fw-bold">{(props.matchInfo.duration / 60).toFixed() + ':' + (props.matchInfo.duration % 60 < 10 ? `0${props.matchInfo.duration % 60}` : props.matchInfo.duration % 60)}</div>
                    </div>
            </div>
        </div>
    )
}

export default MatchInfoContainer;