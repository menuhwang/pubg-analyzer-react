import React, {ReactElement} from "react";
import {Page} from "../../types/Page";
import PageCursorBtn from "./PageCursorBtn";
import PageCtrBtn, {PageCtrBtnType} from "./PageCtrBtn";

type PaginationProps = {
    page: Page<any> | undefined,
    matchType: null | string
}

function Pagination({page, matchType}: PaginationProps) {
    if (page === undefined) {
        return (
            <></>
        )
    }

    const pageBtnGroup: ReactElement[] = [];
    for (let i: number = page.paginationStartNum; i <= page.paginationEndNum; i++) {
        pageBtnGroup.push(<PageCursorBtn number={i} page={page.number} size={page.size} matchType={matchType} key={i}/>);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center mt-3">
                <PageCtrBtn type={PageCtrBtnType.PREV} disable={page.first} page={page.previousPageNum} size={page.size} matchType={matchType}/>

                {pageBtnGroup}

                <PageCtrBtn type={PageCtrBtnType.NEXT} disable={page.last} page={page.nextPageNum} size={page.size} matchType={matchType}/>
            </ul>
        </nav>
    )
}

export default Pagination;