import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ icon, name, badge, onclick, path, position, select, navSlide }) => {
    return (
        <Link
            onClick={onclick}
            to={path}
            className={clsx({
                "w-full h-auto p-1 pr-2 flex flex-row items-center justify-between rounded-lg cursor-pointer bg-[#7dc642]": position == select,
                "w-full h-auto p-1 pr-2 flex flex-row items-center justify-between rounded-lg cursor-pointer hover:bg-[#7dc642] duration-150 group": position !== select
            })}
        >
            <div className="flex flex-row items-center gap-2">
                <div className="w-[40px] h-[40px] flex items-center justify-center relative">
                    {navSlide ? (
                        <i className={`${icon} text-2xl text-white`}></i>
                    ) : (
                        <i className={`${icon} text-2xl text-white`}></i>
                    )}
                    {!navSlide && (
                        <>
                            {badge && (
                                <p className="absolute text-xs font-medium text-white top-[-10px] right-[-10px] bg-red-500 rounded-md p-1">{badge}</p>
                            )}
                        </>
                    )}
                </div>
                {navSlide && (
                    <p className="font-semibold text-lg text-white font-opensan">{name}</p>
                )}
            </div>
            {navSlide && (
                <>
                    {badge && (
                        <p className="text-xs font-medium text-white p-1 bg-red-500 rounded-lg">{badge}</p>
                    )}
                </>
            )}
        </Link>
    );
}

export default NavButton;