import React from "react";

const CommonSelect = ({ name, title, data, setText }) => {

    function handleSelect(event) {
        setText(event.target.value)
    }

    return (
        <div className="w-full h-full relative flex flex-col gap-2">
            {name && (
                <p className="font-bold">{name}</p>
            )}
            <select
                defaultValue={""}
                onChange={handleSelect}
                className="w-full h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3 pr-10"
            >
                <option value="" disabled selected>{title}</option>

                {data?.map((value, index) => {
                    return (
                        <option key={index} value={value.name}>{value.name}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default CommonSelect;