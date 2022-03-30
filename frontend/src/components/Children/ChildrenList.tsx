import React, {useEffect, useState} from 'react';
import {ChildrenTable} from "./ChildrenTable";
import {ListChildrenRes} from 'types';
import {Spinner} from "../common/Spinner/Spinner";

export const ChildrenList = () => {
    const [data, setData] = useState<ListChildrenRes | null>(null);

    const refreshGifts = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/child');
        setData(await res.json());
    };

    useEffect(() => {
        refreshGifts();
    }, []);

    if (data === null) {
        return <Spinner/>;
    }

    return <>
        <h1>Gifts</h1>
        <ChildrenTable childrenList={data.childrenList} giftsList={data.giftsList}/>
    </>;
};
