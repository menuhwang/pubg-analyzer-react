import React, {ReactElement} from "react";

type KillDamageDealtProps = {
    player: string
    member: string[]
    playerDamageDealt: any
}

function KillDamageDealt(props: KillDamageDealtProps) {
    if (props.member === undefined || props.member.length === 0) return null;

    const th: ReactElement[] = props.member.map(nickname => <th key={nickname} style={{width: "25%"}}>{nickname}</th>);
    const td: ReactElement[] = props.member.map(nickname => <td key={nickname}>{props.playerDamageDealt[nickname] !== undefined ? props.playerDamageDealt[nickname] : "0.0"}</td>);

    return (
        <div className="table-responsive">
            <table className="table align-middle">
                <thead>
                <tr>
                    <th style={{width: "25%"}}>{props.player}</th>
                    {th}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.playerDamageDealt[props.player] !== undefined ? props.playerDamageDealt[props.player] : "0.0"}</td>
                    {td}
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default KillDamageDealt;