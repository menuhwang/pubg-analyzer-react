import React from "react";

export enum PageCtrBtnType {
    PREV = '<',
    NEXT = '>'
}

type PageCtrBtnProps = {
    type: PageCtrBtnType,
    disable: boolean,
    page: number,
    size: number,
}

function PageCtrBtn({type, disable, page, size}: PageCtrBtnProps) {
    return (
        <>
            {
                disable ?
                    <li className="page-item disabled">
                        <a className="page-link">
                            <span aria-hidden="true">{type}</span>
                        </a>
                    </li>
                    :
                    <li className="page-item">
                        <a className="page-link" href={`?page=${page}&size=${size}`}>
                            <span aria-hidden="true">{type}</span>
                        </a>
                    </li>
            }
        </>
    )
}

export default PageCtrBtn;