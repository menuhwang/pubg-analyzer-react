import React from "react";
import KillDamageLogTable from "./KillDamageLogTable";
import KillDamageDealt from "./KillDamageDealt";
import {KillLog} from "../types/KillLog";
import {Accordion} from "react-bootstrap";

type KillDamageProps = {
    matchCreatedAt: string
    player: string
    member: string[]
    killLog: KillLog[]
    victimPlayerDamageDealt: any
    victimDamageLog: any
}

function KillDamage(props: KillDamageProps) {
    if (props.killLog === undefined || props.killLog.length === 0) return null;

    const accordionItem = props.killLog.map(log =>
        <Accordion.Item key={log.victim.name} eventKey={`player-${log.victim.name}-collapse`}>
            <Accordion.Header>{log.victim.name}</Accordion.Header>
            <Accordion.Body>
                <KillDamageDealt player={props.player} member={props.member} playerDamageDealt={props.victimPlayerDamageDealt[log.victim.name]} />
                <KillDamageLogTable matchCreatedAt={props.matchCreatedAt} damageLog={props.victimDamageLog[log.victim.name]} />
            </Accordion.Body>
        </Accordion.Item>
    )

    return (
        <div className="row">
            <div className="col">
                <Accordion>
                    {accordionItem}
                </Accordion>
            </div>
        </div>
    )
}

export default KillDamage;