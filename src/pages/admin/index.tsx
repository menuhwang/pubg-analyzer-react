import React from 'react';
import NavbarProvider from "../../components/navbar/NavbarProvider";
import Sidebar from "../../components/admin/sidebar";

function AdminHomePage() {
    return (
        <>
            <NavbarProvider isAdmin={true} />
            <div className="container-fluid py-4">
                <div className="row gap-4">
                    <aside className="col-md-3 col-xl-2">
                        <Sidebar />
                    </aside>
                    <div className="col-auto vstack gap-4">
                        <h1>Admin 홈 페이지</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHomePage;
