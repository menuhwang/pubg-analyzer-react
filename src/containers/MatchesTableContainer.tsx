import React from "react";
import {SearchPlayer} from "../types/SearchPlayer";
import MatchItemEmpty from "../components/MatchItemEmpty";
import MatchItem from "../components/MatchItem";
import Pagination from "../components/pagination";
import MatchItemPlaceHolder from "../components/MatchItemPlaceHolder";

interface MatchesTableProps extends SearchPlayer {
    itemClickHandler: (index: number) => void
    loading: boolean
    selected: boolean[]
}

function MatchesTableContainer(props: MatchesTableProps) {
    if (props.loading) return <MatchItemPlaceHolder />

    if (props.player === undefined || props.matches === undefined) return null;

    if (props.matches.size === 0) return (<MatchItemEmpty/>);
    return (
        <div id="stats">
            {props.matches.content.map((participant, index) =>
                <MatchItem match={participant.match} stat={participant.stat} player={props.player!} selected={props.selected[index]}
                           onClickHandler={() => {
                               props.itemClickHandler(index);
                           }}
                />
            )}
            <Pagination page={props.matches}/>
        </div>
    )
}

export default MatchesTableContainer;