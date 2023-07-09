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
}

function PageCtrBtn({type, disable, page, size}: PageCtrBtnProps) {
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
                        <Link className="page-link" to={`?page=${page}&size=${size}`}>
                            <span aria-hidden="true">{type}</span>
                        </Link>
                    </li>
            }
        </>
    )
}

export default PageCtrBtn;