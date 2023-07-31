import {createAsyncThunk} from "@reduxjs/toolkit"
import {ActionType} from "./common"
import {AsyncThunkConfig} from "../store"
import {CategoryType, NoteType} from "../../types/note.type";
import {extractDatesFromText} from "../../utils/extractDates";

export const updateNote = createAsyncThunk<Array<NoteType>, NoteType, AsyncThunkConfig>(ActionType.UPDATE_NOTE,
    async (note, {getState}) => {
        const notes = getState().AppReducer.notes
        const copy_notes = [...notes]
        let index = notes.findIndex(obj => obj.id === note.id)
        if (index !== -1) {
            copy_notes[index] = {...note, dates: extractDatesFromText(note.content)}
        } else {
            const new_note: NoteType = {
                id: Math.random(),
                name: note.name,
                content: note.content,
                category: note.category,
                created: new Date(),
                dates: extractDatesFromText(note.content),
                archived: false,
            }
            copy_notes.push(new_note)
        }

        return copy_notes
    })


export const deleteNote = createAsyncThunk<Array<NoteType>, NoteType, AsyncThunkConfig>(ActionType.DELETE_NOTE,
    async (note, {getState}) => {
        const notes = getState().AppReducer.notes
        return notes.filter(i => i.id !== note.id);
    })

export const countCategories = createAsyncThunk<Array<CategoryType>, any, AsyncThunkConfig>(ActionType.COUNT_CATEGORIES,
    async (note, {getState}) => {
        const categories = getState().AppReducer.categories
        const notes = getState().AppReducer.notes

        const new_categories = categories.map(category => {
            let count = notes.reduce((accum, note) => note.category === category.name ? accum + 1 : accum, 0)
            let count_archived = notes.reduce((accum, note) => {
                if (note.category === category.name && note.archived) {
                    return accum + 1
                }
                return accum
            }, 0)

            return {...category, count_archived: count_archived, count_active: count - count_archived}
        })


        return new_categories
    })
