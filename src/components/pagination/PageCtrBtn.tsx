import React from "react";
import {Link} from "react-router-dom";

export enum PageCtrBtnType {
    PREV = '<',
    NEXT = '>'
}

type PageCtrBtnProps = {
    type: PageCtrBtnType,
    disable: boolean,
    page: number,
    size: number,
    matchType?: null | string
}

function PageCtrBtn({type, disable, page, size, matchType}: PageCtrBtnProps) {
    let url = `?page=${page}&size=${size}`;
    if (matchType) {
        url += `&matchType=${matchType}`;
    }

    return (
        <>
            {
                disable ?
                    <li className="page-item disabled">
                        <Link className="page-link" to={""}>
                            <span aria-hidden="true">{type}</span>
                        </Link>
                    </li>
                    :
                    <li className="page-item">
                        <Link className="page-link" to={url}>
                            <span aria-hidden="true">{type}</span>
                        </Link>
                    </li>
            }
        </>
    )
}

export default PageCtrBtn;