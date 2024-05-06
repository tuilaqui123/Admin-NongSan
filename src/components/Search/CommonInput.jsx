import React from "react";

const CommonInput = ({ name, placeholder, type }) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <p className="font-bold">{name}</p>
            <input
                type={type}
                placeholder={placeholder}
                className="h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
            />
        </div>
    )
}

export default CommonInput;