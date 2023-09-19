import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {MatchInfo} from "../types/MatchInfo";
import {useParams} from "react-router-dom";
import {fetchGetMatchInfo} from "../api/matches";

export const MatchInfoContext = createContext<MatchInfo | null>(null);

function MatchInfoContextProvider({children}: PropsWithChildren) {
    const {matchId} = useParams();
    const [matchInfo, setMatchInfo] = useState<MatchInfo | null>(null);

    useEffect(() => {
        if (matchId === undefined) return;

        fetchGetMatchInfo(matchId)
            .then(result => {
                setMatchInfo(result);
            }).catch(e => console.error(e));
    }, [matchId])
    return (
        <MatchInfoContext.Provider value={matchInfo}>
            {children}
        </MatchInfoContext.Provider>
    )
}

export default MatchInfoContextProvider;
