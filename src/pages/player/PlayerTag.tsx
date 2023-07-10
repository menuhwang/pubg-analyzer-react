import React from "react";
import BookmarkButton from "./BookmarkButton";

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
                    <BookmarkButton nickname={props.nickname!} />
                </div>
            </div>
        </div>
    )
}

export default PlayerTag;