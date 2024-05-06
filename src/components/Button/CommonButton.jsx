import React from "react";
import { Link } from "react-router-dom";

const CommonButton = ({ path, onclick, children, hoverColor }) => {
    return (
        <Link
            onClick={onclick}
            to={path}
            className={`w-auto h-[50px] px-5 bg-[#3e3e3e] rounded-lg flex items-center justify-center hover:bg-${hoverColor} duration-200`}
        >
            <p className="text-white font-medium">{children}</p>
        </Link>
    );
}

export default CommonButton