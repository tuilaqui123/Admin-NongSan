import React from "react";

const CommonTextarea = ({ name, placeholder, text, setText }) => {
    function handleText(event) {
        setText(event.target.value);
    }
    return (
        <div className="w-full flex flex-col gap-2">
            <p className="font-bold">{name}</p>
            <textarea
                placeholder={placeholder}
                value={text}
                onChange={handleText}
                className="p-3 border border-[#3e3e3e] resize-none rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]" name="comment" cols="30" rows="4"
            ></textarea>
        </div>
    )
}

export default CommonTextarea;