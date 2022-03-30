import React from 'react';
import {GiftEntity, ChildEntity} from 'types';
import {ChildrenTableRow} from "./ChildrenTableRow";

interface Props {
    giftsList: GiftEntity[];
    childrenList: ChildEntity[];
}

export const ChildrenTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Gift</th>
        </tr>
        </thead>
        <tbody>
        {
            props.childrenList.map(child => (
                <ChildrenTableRow
                    key={child.id}
                    child={child}
                    giftsList={props.giftsList}
                />
            ))
        }
        </tbody>
    </table>
);
