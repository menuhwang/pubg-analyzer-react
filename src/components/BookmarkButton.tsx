import React, {useContext, useState} from "react";
import BookmarkWrapper from "../types/BookmarkWrapper";
import BookmarkContext from "../contexts/BookmarkContext";
import BookmarkUtil from "../util/BookmarkUtil";

type BookmarkButtonProps = {
    nickname: string,
}

function BookmarkButton(props: BookmarkButtonProps) {
    const bookmarkWrapper: BookmarkWrapper = useContext(BookmarkContext);
    const [isBookmarked, setBookmarked] = useState<boolean>(bookmarkWrapper.contains(props.nickname));

    const addBookmark = () => {
        bookmarkWrapper.add(props.nickname);
        BookmarkUtil.save(bookmarkWrapper);
        setBookmarked(true);
    }

    const removeBookmark = () => {
        bookmarkWrapper.remove(props.nickname);
        BookmarkUtil.save(bookmarkWrapper);
        setBookmarked(false);
    }

    return (
        <button className={`btn d-flex align-items-center ${isBookmarked ? "btn-warning" : "btn-outline-warning"}`}
            onClick={isBookmarked ? removeBookmark : addBookmark}>
            <i className="fa-solid fa-bookmark"></i>
        </button>
    )
}

export default BookmarkButton;