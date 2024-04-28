import React from "react";
import { Link } from "react-router-dom";

const CommonButton = ({ path, onclick, children }) => {
    return (
        <Link
            onClick={onclick}
            to={path}
            className="w-auto h-[50px] px-5 bg-[#3e3e3e] rounded-lg flex items-center justify-center hover:bg-[#7dc642] duration-200"
        >
            <p className="text-white font-medium">{children}</p>
        </Link>
    );
}

export default CommonButton