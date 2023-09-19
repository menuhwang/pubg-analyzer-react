import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {DamageLog} from "../types/DamageLog";
import {useParams} from "react-router-dom";
import {fetchGetDamageLogs} from "../api/telemetries";

export const AllOwnDamageContext = createContext<DamageLog[] | null>(null);

function AllOwnDamageContextProvider({children}: PropsWithChildren) {
    const {matchId, nickname} = useParams();
    const [damageLogs, setDamageLogs] = useState<DamageLog[] | null>(null);

    useEffect(() => {
        if (matchId === undefined || nickname === undefined) return;

        fetchGetDamageLogs(matchId, nickname)
            .then(result => setDamageLogs(result))
            .catch(e => console.error(e));
    }, [matchId, nickname])
    return (
        <AllOwnDamageContext.Provider value={damageLogs}>
            {children}
        </AllOwnDamageContext.Provider>
    )
}

export default AllOwnDamageContextProvider;
