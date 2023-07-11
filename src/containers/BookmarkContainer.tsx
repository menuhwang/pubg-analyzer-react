import React, {ReactElement, useContext} from "react";
import BookmarkWrapper from "../types/BookmarkWrapper";
import {Link} from "react-router-dom";
import BookmarkContext from "../contexts/BookmarkContext";

function BookmarkContainer() {
    const bookmarkWrapper: BookmarkWrapper = useContext(BookmarkContext);
    let listItem: ReactElement[];
    if (bookmarkWrapper.isEmpty()) {
        listItem = [<li className="list-group-item" key={'bookmark-empty'}>플레이어 검색 후 북마크를 등록해주세요!</li>];
    } else {
        const bookmarkObj = bookmarkWrapper.data;
        listItem = bookmarkObj.map(bookmark =>
            <li className="list-group-item" key={bookmark.nickname}>
                <Link className="text-black"
                   to={'/player/' + bookmark.nickname}>{bookmark.nickname}</Link>
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

export default BookmarkContainer;