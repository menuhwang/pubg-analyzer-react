import {Cookies} from "react-cookie";
import {BookmarkWrapper} from "../types/BookmarkWrapper";
import {LegacyBookmarkWrapper} from "../types/LegacyBookmarkWrapper";
import {Bookmark} from "../types/Bookmark";
import {LegacyBookmark} from "../types/LegacyBookmark";

// 기존 쿠키 북마크를 로컬스토리지에 저장 후 쿠키를 지워주는 유틸
function get(): BookmarkWrapper | null {
    migration();
    const bookmarkRaw: string | null = localStorage.getItem('bookmark');

    if (bookmarkRaw == null || bookmarkRaw.trim().length === 0) return null;
    return JSON.parse(bookmarkRaw);
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
            return {nickname: bookmark.player};
        })
    }

    const migrationBookmark: BookmarkWrapper = {
        version: bookmarkDecoded.version,
        data: data
    };

    localStorage.setItem('bookmark', JSON.stringify(migrationBookmark));
    cookies.remove('bookmark');
}

const BookmarkUtil = {
    get
};

export default BookmarkUtil;