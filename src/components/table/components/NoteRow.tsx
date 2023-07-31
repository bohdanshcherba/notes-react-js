import React, {FC, ReactElement} from "react";
import {IcoButton} from "../../button/Button";
import {NoteType} from "../../../types/note.type";
import {CategoryIco} from "./CategoryIco";


type Props = {
    item: NoteType,
    editNote: (note: NoteType) => void
    archiveNote: (note: NoteType) => void
    deleteNote: (note: NoteType) => void
}

export const NoteRow: FC<Props> = ({item, editNote, archiveNote, deleteNote}): ReactElement => {

    return <div className='row table_row'>
        <div className='table_item_ico'><CategoryIco ico={item.category} size={25}/></div>
        <div className='table_item'>{item.name}</div>
        <div className='table_item'>{item.created.toLocaleDateString()}</div>
        <div className='table_item'>{item.category}</div>
        <div className='table_item'>{item.content}</div>
        <div className='table_item'>{item.dates}</div>
        <div className='table_item_nav'>
            <IcoButton ico='edit' onClick={() => {
                editNote(item)
            }}/>
            <IcoButton ico={item.archived ? 'archived' : 'archive'} onClick={() => {
                archiveNote(item)
            }}/>
            <IcoButton ico='delete' onClick={() => {
                deleteNote(item)
            }}/>

        </div>
    </div>
}
