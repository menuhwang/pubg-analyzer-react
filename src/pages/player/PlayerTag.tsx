import React from "react";

type PlayerTagProps = {
    nickname: string | undefined,
    loading: boolean,
    updateBtnHandler: () => void
}

function PlayerTag(props: PlayerTagProps) {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="mb-3" id="nickname">{props.nickname}</h1>
                <div className="d-flex">
                    <button className="pa-renew-btn btn btn-primary me-2" disabled={props.loading} onClick={props.updateBtnHandler}>
                        전적 갱신
                        <span className="spinner-border spinner-border-sm" role="status"
                              style={{display: props.loading ? "inline-flex" : "none"}}></span>
                    </button>
                    <button className="btn btn-warning d-flex align-items-center">
                        <i className="fa-solid fa-bookmark"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlayerTag;