import React, {useContext, useEffect, useState} from "react";
import KillDamageLogTable from "./KillDamageLogTable";
import KillDamageDealt from "./KillDamageDealt";
import {Accordion} from "react-bootstrap";
import {DamageLog} from "../types/DamageLog";
import {fetchGetDamagesOfKills} from "../api/telemetries";
import {RosterContext} from "../contexts/RosterContextProvider";
import {MatchInfoContext} from "../contexts/MatchInfoContextProvider";
import {KillLogsContext} from "../contexts/KillLogsContextProvider";

type KillDamageProps = {
    matchId: string | undefined,
    playerName: string | undefined,
}

function KillDamage(props: KillDamageProps) {
    const roster = useContext(RosterContext);
    const [member, setMember] = useState<string[] | null>(null);
    const matchInfo = useContext(MatchInfoContext);
    const [matchCreatedAt, setMatchCreatedAt] = useState<string | null>(null);
    const killLogs = useContext(KillLogsContext);
    const [damageLogsGroupByVictim, setDamageLogsGroupByVictim] = useState<Map<string, DamageLog[]> | null>(null);
    const [damageDealtGroupByVictim, setDamageDealtGroupByVictim] = useState<Map<string, Map<string, number>> | null>(null);

    useEffect(() => {
        if (roster === null) return;

        const memberTemp = roster.participants.map(participant => participant.name);
        setMember(memberTemp);
    }, [roster])

    useEffect(() => {
        if (matchInfo === null) return;

        setMatchCreatedAt(matchInfo.createdAt);
    }, [matchInfo])

    useEffect(() => {
        if (props.matchId === undefined || props.playerName === undefined) return;

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