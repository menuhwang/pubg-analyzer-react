import React, {useEffect, useState} from "react";
import PlayerTagContainer from "../containers/PlayerTagContainer";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {Page} from "../types/Page";
import MatchesTableContainer from "../containers/MatchesTableContainer";
import './PlayerPage.css';
import Calculator, {Summary} from "../components/Calculator";
import {Application} from "../constants/application";
import {MatchStats} from "../types/MatchStats";
import {fetchGetMatchesByPlayer} from "../api/matches";

const DEFAULT_SUMMARY: Summary = {
    matches: 0,
    kills: 0,
    assists: 0,
    damageDealt: 0.00,
}

function PlayerPage() {
    const path = useLocation();
    const {nickname} = useParams<string>();
    const [searchParams] = useSearchParams();
    const pageParam: string | null = searchParams.get('page');
    const page: number = pageParam === null ? 0 : parseInt(pageParam);
    const sizeParam: string | null = searchParams.get('size');
    const size: number = sizeParam === null ? 20 : parseInt(sizeParam);

    const [matches, setMatches] = useState<Page<MatchStats>>();
    const [loading, setLoading] = useState<boolean>(false);

    const [summary, setSummary] = useState<Summary>(DEFAULT_SUMMARY);
    const [summaryMemo, setSummaryMemo] = useState<boolean[]>(new Array<boolean>(20));

    useEffect(() => {
        document.title = `${Application.brand} - ${nickname}`;
        initSummary();
        setLoading(true);
        fetchGetMatchesByPlayer(nickname, page, size, setMatches)
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
    }, [path])

    useEffect(() => {
        setSummary(summary);
    }, [summary])


    const summaryMatch = (index: number) => {
        const updateSummary: Summary = {
            ...summary
        };
        if (summaryMemo[index]) {
            summaryMemo[index] = false;
            updateSummary.matches--;
            updateSummary.kills -= matches!.content[index].stats.kills;
            updateSummary.assists -= matches!.content[index].stats.assists;
            updateSummary.damageDealt -= matches!.content[index].stats.damageDealt;
        } else {
            summaryMemo[index] = true;
            updateSummary.matches++;
            updateSummary.kills += matches!.content[index].stats.kills;
            updateSummary.assists += matches!.content[index].stats.assists;
            updateSummary.damageDealt += matches!.content[index].stats.damageDealt;
        }
        setSummary({
            ...summary,
            ...updateSummary
        });
    }

    const isMatchesEmpty: () => boolean = () => {
        return matches === undefined || matches.content.length === 0;
    }

    const initSummary = () => {
        setSummaryMemo(new Array<boolean>(20));
        setSummary(DEFAULT_SUMMARY);
    }

    return (
        <div className="pa-player-page min-vh-100 container-fluid py-md-5">
            <div className="row g-4">
                {/*<!--sidebar:left-->*/}
                <aside className="col-lg-2"></aside>
                <div className="col-md-8 col-lg-6 vstack gap-4">
                    <PlayerTagContainer nickname={nickname}/>
                    <MatchesTableContainer loading={loading} player={nickname} matches={matches}
                                           itemClickHandler={summaryMatch} selected={summaryMemo}/>
                </div>
                {/*<!--sidebar:right-->*/}
                <aside className="col-lg-2">
                    <Calculator display={!isMatchesEmpty()} summary={summary} selectedInit={initSummary}/>
                </aside>
            </div>
        </div>
    )
}

export default PlayerPage;