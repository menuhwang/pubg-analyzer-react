import Bookmark from "./Bookmark";

const VERSION = "1.0";

class BookmarkWrapper {
    public version: string;
    public data: Bookmark[];

    private constructor(version: string, data: Bookmark[]) {
        this.version = version;
        this.data = data;
    }

    public static of(version: string, data: Bookmark[]): BookmarkWrapper {
        return new BookmarkWrapper(version, data);
    }

    public static empty(): BookmarkWrapper {
        return new BookmarkWrapper(VERSION, []);
    }

    public static parse(str: string) {
        try {
            const object = JSON.parse(str);
            return BookmarkWrapper.of(object.version, Bookmark.parse(object.data));
        } catch (e) {
            return BookmarkWrapper.empty();
        }
    }

    public contains(nickname: string): boolean {
        for (let bookmark of this.data) {
            if (bookmark.nickname === nickname) return true;
        }
        return false;
    }

    public isEmpty(): boolean {
        return this.data.length === 0;
    }

    public add(nickname: string) {
        if (this.contains(nickname)) return;
        this.data.push(Bookmark.of(nickname));
    }

    public remove(nickname: string) {
        this.data.forEach((item, index) => {
            if (item.equals(nickname)) {
                this.data.splice(index, 1);
            }
        })
    }
}

export default BookmarkWrapper;