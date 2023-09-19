import React, {useEffect, useState} from "react";
import KillDamageLogTable from "./KillDamageLogTable";
import KillDamageDealt from "./KillDamageDealt";
import {KillLog} from "../types/KillLog";
import {Accordion} from "react-bootstrap";
import {fetchGetMatchInfo, fetchGetRoster} from "../api/matches";
import {DamageLog} from "../types/DamageLog";
import {fetchGetDamagesOfKills, fetchGetKillLogs} from "../api/telemetries";

type KillDamageProps = {
    matchId: string | undefined,
    playerName: string | undefined,
}

function KillDamage(props: KillDamageProps) {
    const [member, setMember] = useState<string[] | null>(null);
    const [matchCreatedAt, setMatchCreatedAt] = useState<string | null>(null);
    const [killLogs, setKillLogs] = useState<KillLog[] | null>(null);
    const [damageLogsGroupByVictim, setDamageLogsGroupByVictim] = useState<Map<string, DamageLog[]> | null>(null);
    const [damageDealtGroupByVictim, setDamageDealtGroupByVictim] = useState<Map<string, Map<string, number>> | null>(null);

    useEffect(() => {
        if (props.matchId === undefined) return;

        fetchGetMatchInfo(props.matchId)
            .then(result => setMatchCreatedAt(result.createdAt))
            .catch(e => console.error(e));
    }, [props.matchId])

    useEffect(() => {
        if (props.matchId === undefined || props.playerName === undefined) return;

        fetchGetRoster(props.matchId, props.playerName)
            .then(result => {
                const names: string[] = result.participants.map(ele => ele.name);
                setMember(names);
            })
            .catch(e => console.error(e));

        fetchGetDamagesOfKills(props.matchId, props.playerName)
            .then(result => {
                const damageLogsGroupByVictimTemp = new Map<string, DamageLog[]>();
                const damageDealtGroupByVictimTemp = new Map<string, Map<string, number>>();

                result.forEach(log => {
                    const victimName = log.victim.name;
                    if (!damageLogsGroupByVictimTemp.has(victimName)) {
                        damageLogsGroupByVictimTemp.set(victimName, []);
                    }
                    damageLogsGroupByVictimTemp.get(victimName)!.push(log);

                    const attackerName = log.attacker.name;
                    if (!damageDealtGroupByVictimTemp.has(victimName)) {
                        damageDealtGroupByVictimTemp.set(victimName, new Map<string, number>());
                    }
                    const damageDealtOfVictim = damageDealtGroupByVictimTemp.get(victimName);
                    if (!damageDealtOfVictim!.has(attackerName)) {
                        damageDealtOfVictim!.set(attackerName, 0);
                    }
                    damageDealtOfVictim!.set(attackerName, damageDealtOfVictim!.get(attackerName)! + log.damage);
                });
                setDamageLogsGroupByVictim(damageLogsGroupByVictimTemp);
                setDamageDealtGroupByVictim(damageDealtGroupByVictimTemp);
            })
            .catch(e => console.error(e));

        fetchGetKillLogs(props.matchId, props.playerName)
            .then(result => setKillLogs(result))
            .catch(e => console.error(e));

    }, [props.matchId, props.playerName]);

    if (damageLogsGroupByVictim === null || member === null || matchCreatedAt === null || killLogs === null) return null;

    const accordionItem = killLogs.map(log =>
        <Accordion.Item key={log.victim.name} eventKey={`player-${log.victim.name}-collapse`}>
            <Accordion.Header>{log.victim.name}</Accordion.Header>
            <Accordion.Body>
                <KillDamageDealt playerName={props.playerName} member={member} damageDealt={damageDealtGroupByVictim!.get(log.victim.name)!} />
                <KillDamageLogTable matchCreatedAt={matchCreatedAt} damageLog={damageLogsGroupByVictim.get(log.victim.name)!} />
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