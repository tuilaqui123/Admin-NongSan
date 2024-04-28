import React from "react";

const CommonSearch = () => {
    return (
        <div className="w-full h-[50px] relative flex items-center">
            <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full h-full border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3 pr-10"
            />
            <i className="absolute fa-solid fa-magnifying-glass text-xl text-[#7dc642] right-3 "></i>
        </div>
    );
}

export default CommonSearch;