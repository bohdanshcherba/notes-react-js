import React, {FC, ReactElement} from 'react';
import {AiOutlineEdit, AiOutlineFolderOpen, AiOutlineDelete, AiFillFolder} from "react-icons/ai";
import './button.scss'

type Props = {
    ico: 'edit' | 'archive' | 'delete' | 'archived',
    onClick?: () => void
}
export const IcoButton: FC<Props> = ({ico, onClick,}): ReactElement => {

    const icoType = ()=>{
        switch (ico) {
            case "archive":
                return <AiOutlineFolderOpen  size={20}/>
            case "delete":
                return <AiOutlineDelete className='ico_btn_delete' size={20}/>
            case "edit":
                return <AiOutlineEdit size={20}/>
            case "archived":
                return <AiFillFolder size={20}/>
        }
    }

    return (
        <>
            <button type="button" onClick={onClick} className='ico_btn'>
                {icoType()}
            </button>
        </>
    )
}
