import React from "react";
import {SearchPlayer} from "../../types/SearchPlayer";
import MatchItemEmpty from "./MatchItemEmpty";
import MatchItem from "./MatchItem";
import Pagination from "../../components/pagination";


function MatchesTable({player, matches}: SearchPlayer) {
    if (player === undefined || matches === undefined) return (<></>);

    if (matches.size === 0) return (<MatchItemEmpty />);
    return (
        <div id="stats">
            {matches.content.map(participant => <MatchItem match={participant.match} stat={participant.stat} player={player} />)}
            <Pagination page={matches} />
        </div>
    )
}

export default MatchesTable;