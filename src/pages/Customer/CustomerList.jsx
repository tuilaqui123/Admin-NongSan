import React, {useEffect, useState} from "react";
import CommonSearch from "../../components/Search/CommonSearch";
import CustomerTable from "./CustomerTable";
import StatusBox from "../../components/Display/StatusBox";
import axios from "axios";

const CustomerList = () => {
    
    return (
        <div>
            <div className="w-full grid grid-cols-3 gap-5 mb-5">
                <StatusBox
                    title={"Số tài khoản mới được tạo"}
                    value={100}
                    statistics={"Tăng 10%"}
                    statisticsText={"so với tháng trước"}
                />
                <StatusBox
                    title={"Tổng số khách hàng hiện tại"}
                    value={8902}
                    statistics={"Tăng 430"}
                    statisticsText={"so với tháng trước"}
                />
            </div>
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