import React, {useEffect} from "react";
import './ReportPage.css';
import ReportContainer from "../containers/ReportContainer";
import {Application} from "../constants/application";
import MatchInfoContextProvider from "../contexts/MatchInfoContextProvider";
import KillLogsContextProvider from "../contexts/KillLogsContextProvider";
import RosterContextProvider from "../contexts/RosterContextProvider";

function ReportPage() {
    useEffect(() => {
        document.title = `${Application.brand} - REPORT`;
    }, [])

    return (
        <MatchInfoContextProvider>
            <KillLogsContextProvider>
                <RosterContextProvider>
                    <ReportContainer />
                </RosterContextProvider>
            </KillLogsContextProvider>
        </MatchInfoContextProvider>
    )
}

export default ReportPage;