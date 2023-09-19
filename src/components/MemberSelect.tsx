import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {MemberSelectPlaceHolder} from "./placeholder/MemberSelectPlaceHolder";
import {RosterContext} from "../contexts/RosterContextProvider";

type MemberSelectProps = {
    matchId: string | undefined
    playerName: string | undefined
}

function MemberSelect(props: MemberSelectProps) {
    const roster = useContext(RosterContext);
    const navigator = useNavigate();
    const [member, setMember] = useState<string[] | null>(null);

    useEffect(() => {
        if (roster === null) return;
        const memberTemp = roster.participants.map(participant => participant.name).filter(nickname => nickname !== props.playerName);
        setMember(memberTemp);
    }, [roster, props.playerName])

    if (member === null) return <MemberSelectPlaceHolder />
    if (member.length === 0) return null;

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === undefined) return;
        navigator(`/report/match/${props.matchId}/player/${event.target.value}`)
        event.target.selectedIndex = 0;
    }

    const options = member.map(nickname => <option key={nickname} value={nickname}>{nickname}</option>);

    return (
        <div className="input-group">
            <label className="input-group-text" htmlFor="other-player">Member</label>
            <select className="form-select" id="other-player"
                    onChange={onChangeHandler}>
                <option></option>
                {options}
            </select>
        </div>
    )
}

export default MemberSelect;
