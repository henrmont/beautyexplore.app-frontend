export interface Post {
    description: string,
    tags: string[],
    public: number,
    custons?: string[],
    likes?: string[],
    comment: boolean,
    expire: boolean,
    time?: string,
    erase: boolean,
    message: string,
    files?: string[]
}