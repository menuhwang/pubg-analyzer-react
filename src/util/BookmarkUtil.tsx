import {Cookies} from "react-cookie";
import BookmarkWrapper from "../types/BookmarkWrapper";
import {LegacyBookmarkWrapper} from "../types/LegacyBookmarkWrapper";
import {LegacyBookmark} from "../types/LegacyBookmark";
import Bookmark from "../types/Bookmark";

// 기존 쿠키 북마크를 로컬스토리지에 저장 후 쿠키를 지워주는 유틸
function get(): BookmarkWrapper {
    migration();
    return parse();
}

function migration(): void {
    const cookies = new Cookies();

    const bookmarkEncoded: string | null = cookies.get('bookmark');
    if (bookmarkEncoded == null || bookmarkEncoded.trim().length === 0) return;
    const bookmarkDecoded: LegacyBookmarkWrapper = JSON.parse(atob(bookmarkEncoded));

    let data:Bookmark[] = [];

    const legacyBookmark:LegacyBookmark[] | null = bookmarkDecoded.bookmarks;
    if (legacyBookmark != null && legacyBookmark.length > 0) {
        data = legacyBookmark.map(bookmark => {
            return Bookmark.of(bookmark.player);
        })
    }

    const migrationBookmark: BookmarkWrapper = BookmarkWrapper.of(bookmarkDecoded.version, data);

    save(migrationBookmark);
    cookies.remove('bookmark');
}

function parse(): BookmarkWrapper {
    const bookmarkRaw: string | null = localStorage.getItem('bookmark');

    if (bookmarkRaw == null || bookmarkRaw.trim().length === 0) {
        const bookmark: BookmarkWrapper = BookmarkWrapper.empty();
        save(bookmark);
        return bookmark;
    }

    return BookmarkWrapper.parse(bookmarkRaw);
}

function save(bookmark: BookmarkWrapper) {
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
}

const BookmarkUtil = {
    get,
    save
};

export default BookmarkUtil;