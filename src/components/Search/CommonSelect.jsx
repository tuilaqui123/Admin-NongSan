import React from "react";

const CommonSelect = ({ name, title }) => {
    return (
        <div className="w-full h-full relative flex flex-col gap-2">
            {name && (
                <p className="font-bold">{name}</p>
            )}
            <select
                className="w-full h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3 pr-10"
            >
                <option value="" disabled selected>{title}</option>
                <option>ok</option>
                <option>ok</option>
                <option>ok</option>
            </select>
        </div>
    )
}

export default CommonSelect;