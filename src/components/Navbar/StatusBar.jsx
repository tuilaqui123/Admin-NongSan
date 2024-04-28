import React from "react";
import Breadcrumb from "./Breadcrumb";
import avt from '../../assets/avt.jpg'

const StatusBar = ({ onclick }) => {
    return (
        <div className="w-full h-auto p-3 bg-[#3e3e3e] rounded-lg flex items-center justify-between">
            <div className="flex flex-row items-center gap-5">
                <div
                    onClick={onclick}
                    className="w-[45px] h-[45px] flex items-center justify-center hover:bg-[#7dc642] rounded-lg cursor-pointer duration-200"
                >
                    <i className="fa-solid fa-bars text-2xl text-white"></i>
                </div>
                <Breadcrumb />
            </div>
            <div className="w-auto h-full flex flex-row items-center gap-5 border-l pl-5 px-5">
                <div className="w-[50px] h-[50px]">
                    <img
                        src={avt}
                        className="w-full h-full rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-between h-full w-auto mr-3">
                    <p className="text-white font-bold">kophaiqui</p>
                    <p className="text-[#7dc642] font-bold">Admin</p>
                </div>
                <div
                    className="w-[30px] h-[30px] flex items-center justify-center hover:bg-[#7dc642] rounded-lg cursor-pointer duration-200"
                >
                    <i className="fa-solid fa-caret-down text-2xl text-white"></i>
                </div>
            </div>
        </div>
    );
}

export default StatusBar;