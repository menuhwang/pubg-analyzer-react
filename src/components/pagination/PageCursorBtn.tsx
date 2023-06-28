import React from "react";

interface PageBtnProps {
    number: number,
    page: number,
    size: number,
}

function PageCursorBtn({number, page, size}: PageBtnProps) {
    return (
        <>
            <li className={number - 1 === page ? 'page-item active' : 'page-item'}>
                <a className="page-link" href={`?page=${number - 1}&size=${size}`}>{number}</a>
            </li>
        </>
    )
}

export default PageCursorBtn;