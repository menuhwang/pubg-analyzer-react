import React from "react";

export type QueryInfoProps = {
    count: number
}

function QueryInfo({count}: QueryInfoProps) {
    return (
        <div className="card">
            <div className="card-body">
                <span>매치 : </span>
                <span>{count}</span>
                <span> EA</span>
            </div>
        </div>
    )
}

export default QueryInfo;