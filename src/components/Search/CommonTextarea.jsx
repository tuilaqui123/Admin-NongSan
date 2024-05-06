import React from "react";

const CommonTextarea = ({ name, placeholder }) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <p className="font-bold">{name}</p>
            <textarea className="p-3 border border-[#3e3e3e] resize-none rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]" name="comment" cols="30" rows="4" placeholder={placeholder}></textarea>
        </div>
    )
}

export default CommonTextarea;