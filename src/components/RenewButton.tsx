import React from "react";

type RenewButtonProps = {
    loading: boolean
    updateBtnHandler: () => void
}

function RenewButton(props: RenewButtonProps) {
    return (
        <button className="pa-renew-btn btn btn-primary me-2" disabled={props.loading} onClick={props.updateBtnHandler}>
            전적 갱신
            <span className="spinner-border spinner-border-sm" role="status" style={{display: props.loading ? "inline-flex" : "none"}}></span>
        </button>
    )
}

export default RenewButton;