import React, {useEffect, useState} from "react";
import NavbarProvider from "../../../components/navbar/NavbarProvider";
import Sidebar from "../../../components/admin/sidebar";
import QueryInfo from "./QueryInfo";
import QueryMatch from "./QueryMatch";
import {Match} from "../../../types/Match";
import {fetchGetMatches} from "../../../api/matches";
import {useSearchParams} from "react-router-dom";


function AdminMatchesPage() {
    const [searchParams] = useSearchParams();
    const pageParam: string | null = searchParams.get('page');
    const page: number = pageParam === null ? 0 : parseInt(pageParam);
    const sizeParam: string | null = searchParams.get('size');
    const size: number = sizeParam === null ? 20 : parseInt(sizeParam);

    const [matches, setMatches] = useState<Match[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        fetchGetMatches(page, size, setMatches, setTotal);
    }, [page, size])

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
                        <QueryInfo size={total} />
                        <QueryMatch matches={matches} offset={page * size} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminMatchesPage;