import {createReducer} from "@reduxjs/toolkit"


import {
    updateNote,
    deleteNote, countCategories,
} from "./action"
import {CategoryType, NoteType} from "../../types/note.type";


type State = {
    notes: Array<NoteType>,
    categories: Array<CategoryType>
};

const initialState: State = {
    notes: [
        {
            id: 1,
            name: 'Note 1',
            created: new Date('2023-07-27'),
            category: 'Work',
            content: 'This is the content of Note 1.',
            dates: [],
            archived: false,
        },
        {
            id: 2,
            name: 'Note 2',
            created: new Date('2023-07-26'),
            category: 'Personal',
            content: 'This is the content of Note 2. 26/08/2023',
            archived: false,
            dates: ['26/08/2023']
        },
        {
            id: 3,
            name: 'Note 3',
            created: new Date('2023-07-25'),
            category: 'Study',
            content: 'This is the content of Note 3.',
            archived: false,

            dates: []
        },
        {
            id: 4,
            name: 'Note 4',
            created: new Date('2023-07-24'),
            category: 'Work',
            content: 'This is the content of Note 4.',
            archived: false,

            dates: []
        },
        {
            id: 5,
            name: 'Note 5',
            created: new Date('2023-07-23'),
            category: 'Personal',
            content: 'This is the content of Note 5.',
            archived: false,

            dates: []
        },
        {
            id: 6,
            name: 'Note 6',
            created: new Date('2023-07-22'),
            category: 'Study',
            content: 'This is the content of Note 6.',
            archived: false,

            dates: []
        },
        {
            id: 7,
            name: 'Note 7',
            created: new Date('2023-07-21'),
            category: 'Work',
            content: 'This is the content of Note 7.',
            archived: false,

            dates: []
        },
    ],
    categories: [
        {
            id: 1,
            name: 'Work',
            count_active: 3,
            count_archived: 0
        },
        {
            id: 2,
            name: 'Personal',
            count_active: 2,
            count_archived: 0
        },
        {
            id: 3,
            name: 'Study',
            count_active: 2,
            count_archived: 0
        },

    ]
}

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(updateNote.fulfilled, (state, action) => {

        state.notes = action.payload
    })
    builder.addCase(deleteNote.fulfilled, (state, action) => {

        state.notes = action.payload
    })
    builder.addCase(countCategories.fulfilled, (state, action) => {

        state.categories = action.payload
    })

})

export {reducer}
