import React, {useEffect, useState} from "react";
import NavbarProvider from "../../components/navbar/NavbarProvider";
import PlayerTag from "./PlayerTag";
import {fetchSearchPlayer, fetchUpdateMatchHistory} from "../../api/players";
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {Page} from "../../types/Page";
import {Participant} from "../../types/Participant";
import MatchesTable from "./matchTable/MatchesTable";
import './style.css';
import Calculator, {Summary} from "./calculator/Calculator";

const DEFAULT_SUMMARY: Summary = {
    matches: 0,
    kills: 0,
    assists: 0,
    damageDealt: 0.00,
}

function PlayerPage() {
    const path = useLocation();
    const navigator = useNavigate();
    const {nickname} = useParams<string>();
    const [searchParams] = useSearchParams();
    const pageParam: string | null = searchParams.get('page');
    const page: number = pageParam === null ? 0 : parseInt(pageParam);
    const sizeParam: string | null = searchParams.get('size');
    const size: number = sizeParam === null ? 20 : parseInt(sizeParam);

    const [matches, setMatches] = useState<Page<Participant>>();
    const [updateMatchStatus, setUpdateMatchStatus] = useState<boolean>(false);

    const [summary, setSummary] = useState<Summary>(DEFAULT_SUMMARY);
    const [summaryMemo, setSummaryMemo] = useState<boolean[]>(new Array<boolean>(20));

    useEffect(() => {
        fetchSearchPlayer(nickname, page, size, setMatches)
            .then(() => {
                console.log(matches?.size);
            });
    }, [path])

    useEffect(() => {
        setSummary(summary);
        console.log(summary)
    }, [summary])

    const updateMatchHistory = () => {
        setUpdateMatchStatus(true);
        fetchUpdateMatchHistory(nickname, () => navigator(`/player/${nickname}`))
            .then(() => setUpdateMatchStatus(false))
            .catch(() => setUpdateMatchStatus(false));
    }

    const summaryMatch = (index: number) => {
        console.log('click match card');
        const updateSummary: Summary = {
            ...summary
        };
        if (summaryMemo[index]) {
            console.log(`remove [${index}]`);
            summaryMemo[index] = false;
            updateSummary.matches--;
            updateSummary.kills -= matches!.content[index].stat.kills;
            updateSummary.assists -= matches!.content[index].stat.assists;
            updateSummary.damageDealt -= matches!.content[index].stat.damageDealt;
        } else {
            console.log(`push [${index}]`);
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

    const initSelect = () => {
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
                        <PlayerTag nickname={nickname} loading={updateMatchStatus} updateBtnHandler={() => updateMatchHistory()}/>
                        <MatchesTable player={nickname} matches={matches} itemClickHandler={summaryMatch} selected={summaryMemo}/>
                    </div>
                    {/*<!--sidebar:right-->*/}
                    <aside className="col-lg-2">
                        <Calculator display={matches !== undefined && matches.size > 0} summary={summary} selectedInit={initSelect} />
                    </aside>
                </div>
            </div>
        </>
    )
}

export default PlayerPage;