import React, {ReactNode} from 'react';

import './Dialog.css';

interface Props {
    /**
     * Title of the dialog. You can omit it to disable header in modal.
     */
    title?: string;
    children: ReactNode;
}

export const Dialog = (props: Props) => (
    <div className="Dialog__container">
        {
            props.title && <div className="Dialog__title">
                {props.title}
            </div>
        }
        <div className="Dialog__content">
            {props.children}
        </div>
    </div>
);
