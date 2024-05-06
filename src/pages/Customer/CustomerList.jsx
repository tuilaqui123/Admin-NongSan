import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CommonSearch from "../../components/Search/CommonSearch";
import CustomerTable from "./CustomerTable";


const CustomerList = () => {
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
        <div>
            <div className="w-full h-auto gap-5 grid grid-cols-2">
                <div></div>
                <CommonSearch />
            </div>
            <div className="w-full h-auto mt-5">
                <CustomerTable />
            </div>
        </div>
    )
}

export default CustomerList;