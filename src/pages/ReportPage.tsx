import React from "react";
import NavbarProvider from "../components/navbar/NavbarProvider";
import './ReportPage.css';
import ReportContainer from "../containers/ReportContainer";

function ReportPage() {
    return (
        <>
            <NavbarProvider isAdmin={false} />
            <ReportContainer />
        </>
    )
}

export default ReportPage;