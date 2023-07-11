import React, {useEffect, useState} from "react";
import NavbarProvider from "../components/navbar/NavbarProvider";
import PlayerTagContainer from "../containers/PlayerTagContainer";
import {fetchSearchPlayer} from "../api/players";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {Page} from "../types/Page";
import {Participant} from "../types/Participant";
import MatchesTableContainer from "../containers/MatchesTableContainer";
import './PlayerPage.css';
import Calculator, {Summary} from "../components/Calculator";

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

    const [matches, setMatches] = useState<Page<Participant>>();

    const [summary, setSummary] = useState<Summary>(DEFAULT_SUMMARY);
    const [summaryMemo, setSummaryMemo] = useState<boolean[]>(new Array<boolean>(20));

    useEffect(() => {
        initSummary();
        fetchSearchPlayer(nickname, page, size, setMatches);
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
            updateSummary.kills -= matches!.content[index].stat.kills;
            updateSummary.assists -= matches!.content[index].stat.assists;
            updateSummary.damageDealt -= matches!.content[index].stat.damageDealt;
        } else {
            summaryMemo[index] = true;
            updateSummary.matches++;
            updateSummary.kills += matches!.content[index].stat.kills;
            updateSummary.assists += matches!.content[index].stat.assists;
            updateSummary.damageDealt += matches!.content[index].stat.damageDealt;
        }
        setSummary({
            ...summary,
            ...updateSummary
        });
    }

    const isMatchesEmpty: () => boolean = () => {
        return matches === undefined || matches.size === 0;
    }

    const initSummary = () => {
        setSummaryMemo(new Array<boolean>(20));
        setSummary(DEFAULT_SUMMARY);
    }

    return (
        <>
            <NavbarProvider isAdmin={false} />
            <div className="pa-player-page min-vh-100 container-fluid py-md-5">
                <div className="row g-4">
                    {/*<!--sidebar:left-->*/}
                    <aside className="col-lg-2"></aside>
                    <div className="col-md-8 col-lg-6 vstack gap-4">
                        <PlayerTagContainer nickname={nickname} />
                        <MatchesTableContainer player={nickname} matches={matches} itemClickHandler={summaryMatch} selected={summaryMemo}/>
                    </div>
                    {/*<!--sidebar:right-->*/}
                    <aside className="col-lg-2">
                        <Calculator display={!isMatchesEmpty()} summary={summary} selectedInit={initSummary} />
                    </aside>
                </div>
            </div>
        </>
    )
}

export default PlayerPage;