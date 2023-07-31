import React, {FC, ReactElement, useEffect, useState} from 'react';
import './modal.scss'
import {CategoryType, NoteType} from "../../types/note.type";

type Props = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    onConfirm: (note: NoteType) => void,
    categories: Array<CategoryType>,
    def_note: NoteType | null
}
export const Modal: FC<Props> = ({categories, def_note, visible, setVisible, onConfirm}): ReactElement => {

    const [note, setNote] = useState<NoteType>(def_note  ? def_note: {
        id: -1,
        name: '',
        content: '',
        category: 'Work',
        created: new Date(),
        dates: [],
        archived: false,
    });
    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        def_note ? setNote(def_note): null
    },[def_note])

    const clearModal = () => {
        setNote({
            id: -1,
            name: '',
            content: '',
            category: 'Work',
            created: new Date(),
            dates: [],
            archived: false,
        })
    }

    const closeModal = () => {
        setVisible(false)
        clearModal()
    }

    const onSave = () =>{
        if (note.name!==''){
            onConfirm(note)
            clearModal()
            setVisible(false)
        }
    }


    return (
        <div className={visible?'modal':'visible'}>
            <div className="modal_content">
                <p>Note name</p>
                <input type="text" value={note.name} onChange={e => setNote({...note, name: e.target.value})}/>
                <p>Content</p>
                <textarea value={note.content} onChange={e => setNote({...note, content: e.target.value})}/>

                <div className="modal_footer">
                    <label>Category:</label>
                    <select id="category" name="category" value={note.category}
                            onChange={e => setNote({...note, category: e.target.value})}>
                        {categories.map((item) => {
                            return <option key={item.id}>{item.name}</option>
                        })}
                    </select>
                    <button className="btn" onClick={onSave}>Save</button>
                    <button className="btn_close" onClick={closeModal}>Cancel</button>
                </div>

            </div>
        </div>
    )
}
