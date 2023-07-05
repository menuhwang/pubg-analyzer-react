import React, {ReactElement} from "react";
import {BookmarkWrapper} from "../../types/BookmarkWrapper";
import BookmarkUtil from "../../util/BookmarkUtil";

function BookmarkTable() {
    let bookmarkWrapper: BookmarkWrapper | null = BookmarkUtil.get();

    let listItem: ReactElement[];
    if (bookmarkWrapper == null || bookmarkWrapper.data == null || bookmarkWrapper.data.length === 0) {
        listItem = [<li className="list-group-item" key={'bookmark-empty'}>플레이어 검색 후 북마크를 등록해주세요!</li>];
    } else {
        const bookmarkObj = bookmarkWrapper.data;
        listItem = bookmarkObj.map(bookmark =>
            <li className="list-group-item" key={bookmark.nickname}>
                <a className="text-black"
                   href={'/matches/' + bookmark.nickname}>{bookmark.nickname}</a>
            </li>
        )
    }

    return (
        <div className="card" id="bookmark">
            <div className="card-header">
                Bookmark
            </div>
            <div className="card-body p-0 py-1">
                <ul className="list-group list-group-flush">
                    {listItem}
                </ul>
            </div>
        </div>
    )
}

export default BookmarkTable;