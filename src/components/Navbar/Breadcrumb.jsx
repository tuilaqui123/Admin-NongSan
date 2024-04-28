import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
    return (
        <div className="flex flex-row gap-1">
            <Link
                to={"'thong-ke"}
                className="flex flex-row items-center gap-3 group"
            >
                <i className={`fa-solid fa-chart-simple text-white text-xl group-hover:text-[#7dc642] duration-200`}></i>
                <p className="text-white text-base font-bold group-hover:text-[#7dc642]">Thống kê</p>
            </Link>
            <div className="flex flex-row items-center gap-1">
                <svg class="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <p className="text-white text-base font-bold">Thêm sản phẩm</p>
            </div>
        </div>
    );
}

export default Breadcrumb;