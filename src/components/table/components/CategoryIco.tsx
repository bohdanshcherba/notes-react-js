import React, {FC, ReactElement} from 'react';
import {MdOutlineWorkOutline, MdPerson} from "react-icons/md";
import {TbSchool} from "react-icons/tb";

type Props = {
    ico: string,
    size: number
}
export const CategoryIco: FC<Props> = ({ico,size}): ReactElement => {
    switch (ico) {
        case "Work":
            return <MdOutlineWorkOutline size={size}/>
        case "Personal":
            return <MdPerson size={size}/>
        case "Study":
            return <TbSchool size={size}/>
        default:
            return <></>
    }
}
