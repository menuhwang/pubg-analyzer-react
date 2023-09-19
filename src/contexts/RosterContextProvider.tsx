import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {Roster} from "../types/Roster";
import {useParams} from "react-router-dom";
import {fetchGetRoster} from "../api/matches";

export const RosterContext = createContext<Roster | null>(null);

function RosterContextProvider({children}: PropsWithChildren) {
    const {matchId, nickname} = useParams();
    const [roster, setRoster] = useState<Roster | null>(null);

    useEffect(() => {
        if (matchId === undefined || nickname === undefined) return;

        fetchGetRoster(matchId, nickname)
            .then(result => setRoster(result))
            .catch(e => console.error(e));
    }, [matchId, nickname])

    return (
        <RosterContext.Provider value={roster}>
            {children}
        </RosterContext.Provider>
    )
}

export default RosterContextProvider;
