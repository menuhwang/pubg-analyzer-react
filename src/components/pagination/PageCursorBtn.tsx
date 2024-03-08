import React from "react";
import {Link} from "react-router-dom";

interface PageBtnProps {
    number: number,
    page: number,
    size: number,
    matchType?: null | String,
}

function PageCursorBtn({number, page, size, matchType}: PageBtnProps) {
    let url = `?page=${number - 1}&size=${size}`;
    if (matchType) {
        url += `&matchType=${matchType}`
    }
    return (
        <>
            <li className={number - 1 === page ? 'page-item active' : 'page-item'}>
                <Link className="page-link" to={url}>{number}</Link>
            </li>
        </>
    )
}

export default PageCursorBtn;