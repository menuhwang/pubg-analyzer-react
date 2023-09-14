import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {fetchGetRoster} from "../api/matches";
import {MemberSelectPlaceHolder} from "./placeholder/MemberSelectPlaceHolder";

type MemberSelectProps = {
    matchId: string | undefined
    playerName: string | undefined
}

function MemberSelect(props: MemberSelectProps) {
    const navigator = useNavigate();
    const [member, setMember] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (props.matchId === undefined || props.playerName === undefined) return;
        fetchGetRoster(props.matchId, props.playerName)
            .then(result => {
                const names: string[] = result.participants.map(ele => ele.name);
                setMember(names);
                setLoading(false);
            }).catch(e => console.error(e));
    }, [props.matchId, props.playerName])

    if (loading) return <MemberSelectPlaceHolder />
    if (member.length < 2) return null;

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
