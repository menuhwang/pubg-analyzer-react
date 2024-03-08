import React, {useState} from "react";
import {SearchPlayer} from "../types/SearchPlayer";
import MatchItemEmpty from "../components/MatchItemEmpty";
import MatchItem from "../components/MatchItem";
import Pagination from "../components/pagination/Pagination";
import MatchItemPlaceHolder from "../components/placeholder/MatchItemPlaceHolder";
import RadioButton from "../components/RadioButton";
import {useNavigate} from "react-router-dom";

interface MatchesTableProps extends SearchPlayer {
    itemClickHandler: (index: number) => void
    loading: boolean
    selected: boolean[]
    matchType: null | string
}

function MatchesTableContainer(props: MatchesTableProps) {
    const navigator = useNavigate();
    const updateMatchTypes = (event: React.ChangeEvent<HTMLInputElement>)  => {
        if (event.target.value)
            navigator(`?matchType=${event.target.value}`)
        else
            navigator(``)
    }


    if (props.loading) return <MatchItemPlaceHolder />

    if (props.player === undefined) return null;

    if (props.matches === undefined || props.matches.content.length === 0) return (<MatchItemEmpty/>);

    return (
        <div id="stats">
            <div className='d-flex gap-3'>
                <RadioButton group='matchType' id='matchType-total' label='전체' changeHandler={updateMatchTypes} checked={props.matchType == null}/>
                <RadioButton group='matchType' id='matchType-official' value={'official'} label='오피셜' changeHandler={updateMatchTypes} checked={props.matchType === 'official'}/>
                <RadioButton group='matchType' id='matchType-arcade' value={'arcade'} label='아케이드' changeHandler={updateMatchTypes} checked={props.matchType === 'arcade'}/>
            </div>
            {props.matches.content.map((matchStat, index) =>
                <MatchItem match={matchStat.match} stats={matchStat.stats} player={props.player!} selected={props.selected[index]}
                           onClickHandler={() => {
                               props.itemClickHandler(index);
                           }}
                           key={matchStat.match.id}
                />
            )}
            <Pagination page={props.matches} matchType={props.matchType}/>
        </div>
    )
}

export default MatchesTableContainer;