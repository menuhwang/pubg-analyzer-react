class Bookmark {
    public nickname: string;

    private constructor(nickname: string) {
        this.nickname = nickname;
    }

    public static of(nickname: string): Bookmark {
        return new Bookmark(nickname);
    }

    public static parse(data: any[]): Bookmark[] {
        return data.map(item => Bookmark.of(item.nickname));
    }

    public equals(nickname: string): boolean {
        return this.nickname === nickname;
    }
}

export default Bookmark;