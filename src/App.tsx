import React, {useEffect, useState} from 'react';
import './App.css';
import {Table} from "./components/table/Table";
import {useAppDispatch, useAppSelector} from "./store/store";
import {NoteRow} from "./components/table/components/NoteRow";
import {countCategories, deleteNote, updateNote} from "./store/app/action";
import {Modal} from "./components/modal/Modal";
import {NoteType} from "./types/note.type";
import {CategoryRow} from "./components/table/components/CategoryRow";


function App() {

    const {notes, categories} = useAppSelector(state => state.AppReducer)

    const dispatch = useAppDispatch()
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [editNote, setEditNote] = useState<NoteType | null>(null);

    useEffect(() => {
        dispatch(countCategories([]))
    }, [dispatch, notes])
    const addNoteHandler = () => {
        setModalVisible(true)
    }
    const onSaveNote = (note: NoteType) => {
        dispatch(updateNote(note))
    }

    const onEditNote = (note: NoteType) => {
        setEditNote(note)
        setModalVisible(true)
    }

    const onArchiveNote = (note: NoteType) => {
        dispatch(updateNote({...note, archived: !note.archived}))
    }

    const onDeleteNote = (note: NoteType) => {
        dispatch(deleteNote(note))
    }

    return (
        <div className="App">
            <Table rowTitles={['Name', 'Created', 'Category', 'Content', 'Dates']}>
                {notes ? notes.map(note => <NoteRow key={note.id}
                                                    item={note}
                                                    editNote={onEditNote}
                                                    archiveNote={onArchiveNote}
                                                    deleteNote={onDeleteNote}
                />) : null}
            </Table>
            <div className="add_note">
                <button className="add_note_btn" onClick={addNoteHandler}>add note</button>
            </div>
            <Table rowTitles={['Name', 'Active', 'Archived']}>
                {categories ? categories.map(note => <CategoryRow key={note.id} item={note}/>) : null}
            </Table>

            <Modal categories={categories}
                   visible={modalVisible}
                   setVisible={setModalVisible}
                   onConfirm={onSaveNote}
                   def_note={editNote}
            />
        </div>
    );
}

export default App;
