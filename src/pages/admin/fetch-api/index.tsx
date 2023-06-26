import React from "react";
import NavbarProvider from "../../../components/navbar/NavbarProvider";
import Sidebar from "../../../components/admin/sidebar";
import FetchTab from "./tab/FetchTab";

function AdminFetchPage() {
    return (
        <>
            <NavbarProvider isAdmin={true} />
            <div className="container-fluid py-4">
                <div className="row gap-4">
                    <aside className="col-md-3 col-xl-2">
                        <Sidebar />
                    </aside>
                    <div className="col-auto vstack gap-4">
                        <h1>PUBG API 호출</h1>
                        <FetchTab />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminFetchPage;