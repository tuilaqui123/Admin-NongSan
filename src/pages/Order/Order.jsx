import React from "react";
import { Outlet } from "react-router-dom";
import '../../hiddenScroll.css'

const Order = () => {
    return (
        <div className="w-full h-full bg-white overflow-y-scroll scrollable-div rounded-xl p-3 pb-5 shadow-2xl">
            <Outlet />
        </div>
    );
}

export default Order;