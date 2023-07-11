import React from "react";

type KillInfoTableProps = {
    kills: number
    player: number
    bot: number
}

function KillInfoTable(props: KillInfoTableProps) {
    return (
        <div className="table-responsive">
            <table className="table align-middle">
                <thead>
                <tr>
                    <th>전체</th>
                    <th>플레이어</th>
                    <th>봇</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.kills}</td>
                    <td>{props.player}</td>
                    <td>{props.bot}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default KillInfoTable;