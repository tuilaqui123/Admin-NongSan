import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Breadcrumb = () => {
    const { breadcrumb } = useContext(AppContext)
    return (
        <div className="flex flex-row gap-1">
            <Link
                to={"thong-ke"}
                className="flex flex-row items-center gap-3 group"
            >
                <i className={`${breadcrumb.icon} text-white text-xl group-hover:text-[#7dc642]`}></i>
                <p className="text-white text-base font-bold group-hover:text-[#7dc642]">{breadcrumb.mainSelect}</p>
            </Link>
            {breadcrumb.childSelect && (
                <div className="flex flex-row items-center gap-1">
                    <svg className="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <p className="text-white text-base font-bold">{breadcrumb.childSelect}</p>
                </div>
            )}
        </div>
    );
}

export default Breadcrumb;