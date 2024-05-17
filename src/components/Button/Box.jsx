import React from "react";
import farm from '../../assets/farm.png'
import item from '../../assets/item.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";


const Box = ({ path, image, name }) => {
    const { breadcrumb, setBreadcrumb } = useContext(AppContext)

    function handleChildSelectBreadcrumb(child) {
        const temp = {
            mainSelect: breadcrumb.mainSelect,
            icon: breadcrumb.icon,
            childSelect: child
        }
        setBreadcrumb(temp)
    }

    return (
        <Link
            to={path}
            onClick={() => handleChildSelectBreadcrumb(name)}
            className="w-full h-auto border border-[#3e3e3e] p-2 rounded-lg cursor-pointer group duration-200 hover:bg-[#3e3e3e]">
            <div className="w-full border border-gray-400 rounded-lg bg-white overflow-hidden">
                <img
                    src={image}
                    className="w-full h-[120px] group-hover:scale-110 duration-200 group-hover:brightness-110"
                />
            </div>
            <p className="py-3 font-medium truncate text-center w-full group-hover:text-white duration-200">{name}</p>
        </Link>
    );
}
export default Box;