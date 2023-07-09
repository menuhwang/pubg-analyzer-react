import React from "react";
import {Link} from "react-router-dom";

interface PageBtnProps {
    number: number,
    page: number,
    size: number,
}

function PageCursorBtn({number, page, size}: PageBtnProps) {
    return (
        <>
            <li className={number - 1 === page ? 'page-item active' : 'page-item'}>
                <Link className="page-link" to={`?page=${number - 1}&size=${size}`}>{number}</Link>
            </li>
        </>
    )
}

export default PageCursorBtn;