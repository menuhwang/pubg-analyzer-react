import React from "react";

type PlayerTagProps = {
    nickname: string | undefined
}

function PlayerTag({nickname}: PlayerTagProps) {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="mb-3" id="nickname">{nickname}</h1>
                <div className="d-flex">
                    <button className="pa-renew-btn btn btn-primary me-2">
                        전적 갱신
                        <span className="spinner-border spinner-border-sm" role="status" style={{display: "none"}}></span>
                    </button>
                    <a className="btn btn-warning d-flex align-items-center" role="button">
                        <i className="fa-solid fa-bookmark"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PlayerTag;