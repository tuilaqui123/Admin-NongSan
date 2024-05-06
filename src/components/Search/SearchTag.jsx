import React from "react";

const SearchTag = () => {
    return (
        <div className="w-auto px-2 border border-[#3e3e3e] flex flex-row items-center gap-2 rounded-md">
            <p>Hải sản</p>
            <i className="fa-solid fa-xmark-circle cursor-pointer hover:text-[#ff0000] duration-150"></i>
        </div>
    )
}

export default SearchTag;