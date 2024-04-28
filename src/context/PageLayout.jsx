import React from "react";
import StatusBar from "../components/Navbar/StatusBar";
import clsx from "clsx";

const PageLayout = ({ children, onclick, navSlide }) => {
    return (
        <div className="w-full h-screen flex flex-row bg-[#6b8064] p-3">
            <div
                // className="w-1/4 border"
                className={clsx({
                    "w-1/4": navSlide,
                    "w-1/12": !navSlide
                })}
            ></div>
            <div
                // className="w-3/4 flex flex-col gap-3"
                className={clsx({
                    "w-3/4 flex flex-col gap-3": navSlide,
                    "w-11/12 flex flex-col gap-3": !navSlide
                })}
            >
                <StatusBar
                    onclick={onclick}
                />
                {children}
            </div>
        </div>
    );
}

export default PageLayout;