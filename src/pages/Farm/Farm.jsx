import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../../hiddenScroll.css'
import Box from "../../components/Button/Box";
import CommonSearch from "../../components/Search/CommonSearch";
import CommonButton from "../../components/Button/CommonButton";

const Farm = () => {
    return (
        <div className="w-full h-full bg-white overflow-y-scroll scrollable-div rounded-xl p-3 pb-5 shadow-2xl">
            <Outlet />
        </div>
    );
}

export default Farm;