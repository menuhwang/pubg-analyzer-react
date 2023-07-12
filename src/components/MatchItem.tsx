import React from "react";
import {Participant} from "../types/Participant";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import DateTimeUtil from "../util/DateTimeUtil";

interface MatchItemProps extends Participant {
    player: string,
    selected: boolean
    onClickHandler: React.MouseEventHandler
}
function MatchItem(props: MatchItemProps) {

    const reportBtnOnClick = () => {
        window.location.href = '/report/match/' + props.match.id + '/player/' + props.player;
    }

    const isDisableReportBtn: () => boolean = () => {
        const matchType: string = props.match.matchType.eng;
        return matchType !== 'official'
            && matchType !== 'competitive'
            && matchType !== 'seasonal'
            && matchType !== 'AI mode';
    }

    return (
        <div className="card mt-3 position-relative pa-stat" onClick={props.onClickHandler} data-selected-status={props.selected}>
            <div className="card-body" key={props.match.id}>
                <div className="row align-items-center">
                    <div className="col-12 col-md">
                        <div className="row">
                            <div className="col-auto col-md-12">
                                <span className="align-bottom h3 fw-bold">{'#' + props.stat.rank}</span>
                                <span className="align-bottom text-muted">{'/ ' + props.stat.rosters}</span>
                            </div>
                            <div className="col-auto ms-auto col-md-12 ms-md-0">
                                <OverlayTrigger placement={"bottom"}
                                                overlay={<Tooltip id={props.match.id}>{DateTimeUtil.parse(props.match.createdAt)}</Tooltip>}>
                                    <span>{DateTimeUtil.offset(props.match.createdAt)}</span>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-3 mb-md-0">
                            <div className="col-auto col-md-12">
                                <div>{props.match.map.kor}</div>
                            </div>
                            <div className="col-auto ms-auto col-md-12 ms-md-0">
                                <div>{props.match.mode.kor}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-1 mb-md-0">
                            <div className="col col-md-12">
                                <div>킬</div>
                            </div>
                            <div className="col col-md-12">
                                <div>{props.stat.kills}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-1 mb-md-0">
                            <div className="col col-md-12">
                                <div>어시스트</div>
                            </div>
                            <div className="col col-md-12">
                                <div>{props.stat.assists}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-1 mb-md-0">
                            <div className="col col-md-12">
                                <div>데미지</div>
                            </div>
                            <div className="col col-md-12">
                                <div>{props.stat.damageDealt.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-1 mb-md-0">
                            <div className="col col-md-12">
                                <div>부활</div>
                            </div>
                            <div className="col col-md-12">
                                <div>{props.stat.revives}</div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-auto col-auto">
                        <button className="btn btn-primary my-auto pa-analyze-btn" onClick={reportBtnOnClick} disabled={isDisableReportBtn()}>
                            <i className="fa-solid fa-arrow-right"></i>
                            <span className="spinner-border spinner-border-sm" role="status" style={{display: "none"}}></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchItem;