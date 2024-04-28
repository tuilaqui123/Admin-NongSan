import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../../hiddenScroll.css'

const Dashboard = () => {
    return (
        <div className="w-full h-full bg-white overflow-y-scroll scrollable-div">
            <Link to={"ok1"}>ok1</Link>
            <Link to={"ok2"}>ok2</Link>
            <Outlet />
        </div>
    );
};

export default Dashboard;