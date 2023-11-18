import React from 'react';
import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import {Outlet} from "react-router-dom";

function AppLayout() {
    return (
        <div>
            <Header/>

            <main>
                <Outlet />
            </main>

            <CartOverview/>
        </div>
    );
}

export default AppLayout;