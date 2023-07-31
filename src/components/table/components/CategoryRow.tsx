import React, {FC, ReactElement} from "react";
import {CategoryType} from "../../../types/note.type";
import {CategoryIco} from "./CategoryIco";


type Props = {
    item: CategoryType,
}

export const CategoryRow: FC<Props> = ({item}): ReactElement => {

    return <div className='row table_row'>
        <div className='table_item_ico'><CategoryIco ico={item.name} size={25}/></div>
        <div className='table_item'>{item.name}</div>
        <div className='table_item'>{item.count_active}</div>
        <div className='table_item'>{item.count_archived}</div>
        <div className="table_header_item_nav"></div>

    </div>
}
