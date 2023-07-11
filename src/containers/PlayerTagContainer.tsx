import React, {useState} from "react";
import BookmarkButton from "../components/BookmarkButton";
import RenewButton from "../components/RenewButton";
import {fetchUpdateMatchHistory} from "../api/players";
import {useNavigate} from "react-router-dom";

type PlayerTagProps = {
    nickname: string | undefined
}

function PlayerTagContainer(props: PlayerTagProps) {
    const navigator = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const updateMatchHistory = () => {
        setLoading(true);
        fetchUpdateMatchHistory(props.nickname, () => navigator(`/player/${props.nickname}`))
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
    }

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="mb-3" id="nickname">{props.nickname}</h1>
                <div className="d-flex">
                    <RenewButton loading={loading} updateBtnHandler={updateMatchHistory} ></RenewButton>
                    <BookmarkButton nickname={props.nickname!} />
                </div>
            </div>
        </div>
    )
}

export default PlayerTagContainer;