import React from 'react';
import {GiftsList} from "../components/Gifts/GiftsList";
import {AddGift} from "../components/AddGift/AddGift";
import {Link} from "react-router-dom";

export const GiftsView = () => (
    <>
        <GiftsList/>
        <AddGift/>
    </>
);
