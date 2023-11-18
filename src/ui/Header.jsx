import React from 'react';
import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header() {
    return (
        <header className={'bg-yellow-500'}>
            <Link to={'/'}>Fast React Pizza Co.</Link>

            <SearchOrder/>

            <p>Andrii Mysaka</p>
        </header>
    );
}

export default Header;