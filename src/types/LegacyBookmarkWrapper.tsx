import {LegacyBookmark} from "./LegacyBookmark";

export type LegacyBookmarkWrapper = {
    version: string,
    expires: number,
    bookmarks: LegacyBookmark[] | null
}
