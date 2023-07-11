import React from "react";
import {useNavigate} from "react-router-dom";

type MemberSelectProps = {
    matchId: string
    member?: string[]
}

function MemberSelect(props: MemberSelectProps) {
    const navigator = useNavigate();
    if (props.member === undefined || props.member.length === 0) return null;

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === undefined) return;
        navigator(`/report/match/${props.matchId}/player/${event.target.value}`)
        event.target.selectedIndex = 0;
    }

    const options = props.member.map(nickname => <option key={nickname} value={nickname}>{nickname}</option>);

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