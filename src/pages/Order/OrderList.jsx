import React from "react";
import StatusBox from "../../components/Display/StatusBox";
import CommonSearch from "../../components/Search/CommonSearch";
import OrderTable from "./OrderTable";

const OrderList = () => {
    return (
        <div>
            {/* so don moi (trong ngay) , so dong chua xac nhan, so dong da hoanh thanh (trong 1 thang) */}
            <div className="w-full grid grid-cols-3 gap-5">
                <StatusBox />
                <StatusBox />
                <StatusBox />
            </div>
            <div className="w-full flex justify-end mt-5">
                <div className="w-1/2">
                    <CommonSearch />
                </div>
            </div>
            <div className="w-full h-auto mt-5">
                <OrderTable />
            </div>
        </div>
    )
}

export default OrderList;