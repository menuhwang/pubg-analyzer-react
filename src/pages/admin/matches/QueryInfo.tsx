import React from "react";

export type QueryInfoProps = {
    size: number
}

function QueryInfo({size}: QueryInfoProps) {
    return (
        <div className="card">
            <div className="card-body">
                <span>매치 : </span>
                <span>{size}</span>
                <span> EA</span>
            </div>
        </div>
    )
}

export default QueryInfo;