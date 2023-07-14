import React, {useEffect} from "react";
import NavbarProvider from "../components/navbar/NavbarProvider";
import './ReportPage.css';
import ReportContainer from "../containers/ReportContainer";
import {Application} from "../constants/application";

function ReportPage() {
    useEffect(() => {
        document.title = `${Application.brand} - REPORT`;
    }, [])

    return (
        <>
            <NavbarProvider isAdmin={false} />
            <ReportContainer />
        </>
    )
}

export default ReportPage;