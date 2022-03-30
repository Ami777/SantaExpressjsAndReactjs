import React from 'react';
import {ChildEntity, GiftEntity} from 'types';
import {ChildGiftSelect} from "../ChildGiftSelect";

interface Props {
    child: ChildEntity;
    giftsList: GiftEntity[];
}

export const ChildrenTableRow = (props: Props) => {
    return (
        <tr>
            <th>{props.child.name}</th>
            <td>
                <ChildGiftSelect
                    giftsList={props.giftsList}
                    selectedId={props.child.giftId}
                    childId={props.child.id as string}
                />
            </td>
        </tr>
    );
};
