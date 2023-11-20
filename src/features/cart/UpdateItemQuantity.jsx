import React from 'react';
import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {decreaseItemQuantity, increaseItemQuantity} from "./cartSlice.js";

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();

    return (
        <div className={'flex gap-2 items-center md:gap-3'}>
            <Button type={'round'} onClick={()=> dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span className={'text-sm font-medium'}>{currentQuantity}</span>
            <Button type={'round'} onClick={()=> dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    );
}

export default UpdateItemQuantity;