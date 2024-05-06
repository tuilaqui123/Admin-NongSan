import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import StatusBox from "../../components/Display/StatusBox";
import CommonButton from "../../components/Button/CommonButton";
import CommonSearch from "../../components/Search/CommonSearch";
import VoucherTable from "./VoucherTable";

const ListVoucher = () => {
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
            {/* so luong ma, tong tien giam gia */}

            <div className="w-full grid grid-cols-2 gap-5">
                <StatusBox
                    title={"Số lượng mã còn lại"}
                    value={"120"}
                    statistics={"Giảm 20 mã"}
                />
                <StatusBox
                    title={"Tổng tiền mã giảm giá"}
                    value={"10.000.000đ"}
                    statistics={"Tăng 20%"}
                    statisticsText={"so với tháng trước"}
                />
            </div>
            <div className="w-full h-auto gap-5 grid grid-cols-2 my-5">
                <div className="w-full flex gap-5">
                    <CommonButton
                        path={"them-ma-giam-gia"}
                        onclick={() => handleChildSelectBreadcrumb("Thêm mã giảm giá")}
                        hoverColor={"[#7dc642]"}
                    >
                        + Thêm mã giảm giá
                    </CommonButton>
                </div>
                <CommonSearch />
            </div>
            <div className="w-full h-auto">
                <VoucherTable />
            </div>
        </div>
    );
}

export default ListVoucher;