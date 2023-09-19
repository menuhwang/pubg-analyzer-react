import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {KillLog} from "../types/KillLog";
import {useParams} from "react-router-dom";
import {fetchGetKillLogs} from "../api/telemetries";

export const KillLogsContext = createContext<KillLog[] | null>(null);

function KillLogsContextProvider({children}: PropsWithChildren) {
    const {matchId, nickname} = useParams();
    const [killLogs, setKillLogs] = useState<KillLog[] | null>(null);

    useEffect(() => {
        if (matchId === undefined || nickname === undefined) return;

        fetchGetKillLogs(matchId, nickname)
            .then(result => setKillLogs(result))
            .catch(e => console.error(e));
    }, [matchId, nickname])

    return (
        <KillLogsContext.Provider value={killLogs}>
            {children}
        </KillLogsContext.Provider>
    )
}

export default KillLogsContextProvider;
