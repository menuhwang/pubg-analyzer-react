import React, {ReactElement} from "react";

type KillDamageDealtProps = {
    playerName: string | undefined
    member: string[]
    damageDealt: Map<string, number>
}

function KillDamageDealt(props: KillDamageDealtProps) {
    if (props.playerName === undefined || props.member === undefined || props.member.length < 2 || props.damageDealt === undefined) return null;

    const colWidth = (100 / (props.member.length + 1)).toFixed(2);

    const th: ReactElement[] = props.member.filter(nickname => nickname !== props.playerName).map(nickname => <th key={nickname} style={{width: `${colWidth}%`}}>{nickname}</th>);
    const td: ReactElement[] = props.member.filter(nickname => nickname !== props.playerName).map(nickname => <td key={nickname}>{props.damageDealt.get(nickname) !== undefined ? props.damageDealt.get(nickname)!.toFixed(2) : "0.0"}</td>);

    return (
        <div className="table-responsive">
            <table className="table align-middle">
                <thead>
                <tr>
                    <th style={{width: `${colWidth}%`}}>{props.playerName}</th>
                    {th}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.damageDealt.get(props.playerName) !== undefined ? props.damageDealt.get(props.playerName)!.toFixed(2) : "0.0"}</td>
                    {td}
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default KillDamageDealt;