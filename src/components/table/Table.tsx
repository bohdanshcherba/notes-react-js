import React, {FC, ReactElement, JSX} from "react";
import './style.scss'


type Props = {
    rowTitles: Array<string>
    children?: JSX.Element | JSX.Element[] | null;
}
export const Table: FC<Props> = ({rowTitles, children}): ReactElement => {
    return <div className="container">
        <div className="table">
            <div className="row table_header">
                <div className="table_item_ico"></div>
                {rowTitles.map((item) => {
                    return <div key={item} className="table_header_item">{item}</div>
                })}


                <div className="table_header_item_nav"></div>
            </div>
            <div className="table_body">
                {children}
            </div>
        </div>


    </div>
}
