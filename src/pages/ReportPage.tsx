import React, {useEffect} from "react";
import './ReportPage.css';
import ReportContainer from "../containers/ReportContainer";
import {Application} from "../constants/application";

function ReportPage() {
    useEffect(() => {
        document.title = `${Application.brand} - REPORT`;
    }, [])

    return (
        <ReportContainer />
    )
}

export default ReportPage;