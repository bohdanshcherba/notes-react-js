export type NoteType = {
    id: number,
    name: string,
    created: Date,
    category: string,
    content: string,
    dates: Array<string>,
    archived: boolean,
}

export type CategoryType = {
    id: number,
    name: string,
    count_active: number,
    count_archived: number
}
