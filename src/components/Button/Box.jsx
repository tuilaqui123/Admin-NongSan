import React from "react";
import farm from '../../assets/farm.png'
import item from '../../assets/item.png'
import { Link } from "react-router-dom";


const Box = ({ path, image, name }) => {
    return (
        <Link
            to={path}
            className="w-full h-auto border border-[#3e3e3e] p-2 rounded-lg cursor-pointer group duration-200 hover:bg-[#3e3e3e]">
            <div className="w-full border border-gray-400 rounded-lg bg-white">
                <img
                    src={farm}
                    className=" group-hover:scale-125 duration-200 group-hover:brightness-110"
                />
            </div>
            <p className="py-3 font-medium truncate w-full group-hover:text-white duration-200">Công ty Thiên nhiên Việt</p>
        </Link>
    );
}
export default Box;