import React from "react";
import NavbarProvider from "../../../components/navbar/NavbarProvider";
import Sidebar from "../../../components/admin/sidebar";
import QueryInfo from "./QueryInfo";
import QueryMatch from "./QueryMatch";

const mockMatches = [{
    id: "b1e46963-59ec-42f2-87d7-f22248c7f411",
    createdAt: "2023-06-25 11:13:32"
}, {
    id: "d89f8d18-d2f8-4b30-a433-f6033f1a6600",
    createdAt: "2023-06-25 10:51:47"
}]

function AdminMatchesPage() {
    return (
        <>
            <NavbarProvider isAdmin={true} />
            <div className="container-fluid py-4">
                <div className="row gap-4">
                    <aside className="col-md-3 col-xl-2">
                        <Sidebar />
                    </aside>
                    <div className="col-auto vstack gap-4">
                        <h1>매치 관리</h1>
                        <QueryInfo count={0} />
                        <QueryMatch matches={mockMatches} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminMatchesPage;